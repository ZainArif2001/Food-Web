<?php
// POST /api/orders.php  →  save a customer order
// body: {name, phone, type: delivery|pickup, address, note, items: [{num, sizeIdx, qty}]}
require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'method'], 405);
}

$in    = body();
$items = $in['items'] ?? [];
if (!is_array($items) || !count($items)) {
    json_out(['error' => 'empty_order'], 400);
}

$type = ($in['type'] ?? '') === 'pickup' ? 'pickup' : 'delivery';

try {
    $pdo = db();

    // look up items by num for server-side pricing
    $stmt = $pdo->prepare(
        "SELECT i.num, i.name_en, i.prices, s.sizes
           FROM items i JOIN sections s ON s.id = i.section_id
          WHERE i.num = ?"
    );

    $total = 0;
    $rows  = [];
    foreach ($items as $o) {
        $num     = (int)($o['num'] ?? 0);
        $sizeIdx = (int)($o['sizeIdx'] ?? 0);
        $qty     = max(1, min(99, (int)($o['qty'] ?? 1)));
        if (!$num) continue;

        $stmt->execute([$num]);
        $it = $stmt->fetch();
        if (!$it) continue;

        $prices = json_decode($it['prices'], true);
        $price  = (float)($prices[$sizeIdx] ?? $prices[0]);
        $sizes  = $it['sizes'] ? json_decode($it['sizes'], true) : null;
        $sizeLb = $sizes ? ($sizes[$sizeIdx]['en'] ?? '') : '';

        $total += $price * $qty;
        $rows[] = [$num, $it['name_en'], $sizeLb, $qty, $price];
    }

    if (!count($rows)) json_out(['error' => 'invalid_items'], 400);
    if ($type === 'delivery' && $total < 10) json_out(['error' => 'min_order'], 400);

    $pdo->beginTransaction();
    $pdo->prepare(
        "INSERT INTO orders (customer_name, phone, type, address, note, total)
         VALUES (?, ?, ?, ?, ?, ?)"
    )->execute([
        substr(trim($in['name'] ?? ''), 0, 120),
        substr(trim($in['phone'] ?? ''), 0, 40),
        $type,
        substr(trim($in['address'] ?? ''), 0, 255),
        substr(trim($in['note'] ?? ''), 0, 255),
        $total,
    ]);
    $oid = $pdo->lastInsertId();

    $ins = $pdo->prepare(
        "INSERT INTO order_items (order_id, item_num, item_name, size_label, qty, unit_price)
         VALUES (?, ?, ?, ?, ?, ?)"
    );
    foreach ($rows as $r) {
        $ins->execute([$oid, $r[0], $r[1], $r[2], $r[3], $r[4]]);
    }
    $pdo->commit();

    json_out(['ok' => true, 'id' => (int)$oid, 'total' => $total]);
} catch (Throwable $e) {
    if (isset($pdo) && $pdo->inTransaction()) $pdo->rollBack();
    json_out(['error' => 'db_unavailable'], 500);
}

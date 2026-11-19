<?php
// GET  /api/admin/orders.php   → orders newest-first with items
// POST /api/admin/orders.php   → {id, status: new|preparing|done|cancelled}
require dirname(__DIR__) . '/config.php';
require_admin();

$pdo = db();
$m   = $_SERVER['REQUEST_METHOD'];

if ($m === 'GET') {
    $orders = $pdo->query(
        "SELECT * FROM orders ORDER BY created_at DESC, id DESC LIMIT 200"
    )->fetchAll();

    $items = $pdo->query(
        "SELECT * FROM order_items ORDER BY id"
    )->fetchAll();

    $byOrder = [];
    foreach ($items as $it) $byOrder[$it['order_id']][] = $it;
    foreach ($orders as &$o) $o['items'] = $byOrder[$o['id']] ?? [];

    json_out(['orders' => $orders]);
}

if ($m === 'POST') {
    $in     = body();
    $id     = (int)($in['id'] ?? 0);
    $status = $in['status'] ?? '';
    if (!$id || !in_array($status, ['new', 'preparing', 'done', 'cancelled'], true)) {
        json_out(['error' => 'invalid'], 400);
    }
    $pdo->prepare("UPDATE orders SET status = ? WHERE id = ?")->execute([$status, $id]);
    json_out(['ok' => true]);
}

json_out(['error' => 'method'], 405);

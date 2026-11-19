<?php
// GET  /api/admin/items.php?section=<skey>  → items (optionally filtered)
// POST /api/admin/items.php                 → update one item
//   body: {id, name_en, name_es, desc_en, desc_es, prices: []}
require dirname(__DIR__) . '/config.php';
require_admin();

$pdo = db();
$m   = $_SERVER['REQUEST_METHOD'];

if ($m === 'GET') {
    $sql = "SELECT i.*, s.skey AS section, s.sizes
              FROM items i JOIN sections s ON s.id = i.section_id";
    $args = [];
    if (!empty($_GET['section'])) {
        $sql .= " WHERE s.skey = ?";
        $args[] = $_GET['section'];
    }
    $sql .= " ORDER BY s.sort, i.sort";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($args);
    $rows = $stmt->fetchAll();
    foreach ($rows as &$r) {
        $r['prices'] = json_decode($r['prices'], true);
        $r['sizes']  = $r['sizes'] ? json_decode($r['sizes'], true) : null;
    }
    json_out(['items' => $rows]);
}

if ($m === 'POST') {
    $in = body();
    $id = (int)($in['id'] ?? 0);
    if (!$id) json_out(['error' => 'id'], 400);

    $prices = array_values(array_filter(
        array_map(fn($p) => number_format(max(0, (float)str_replace(',', '.', (string)$p)), 2, '.', ''),
            $in['prices'] ?? [])
    ));
    if (!count($prices)) json_out(['error' => 'prices'], 400);

    $pdo->prepare(
        "UPDATE items SET name_en = ?, name_es = ?, desc_en = ?, desc_es = ?, prices = ? WHERE id = ?"
    )->execute([
        substr(trim($in['name_en'] ?? ''), 0, 120),
        substr(trim($in['name_es'] ?? ''), 0, 120),
        substr(trim($in['desc_en'] ?? ''), 0, 255),
        substr(trim($in['desc_es'] ?? ''), 0, 255),
        json_encode($prices),
        $id,
    ]);
    json_out(['ok' => true]);
}

json_out(['error' => 'method'], 405);

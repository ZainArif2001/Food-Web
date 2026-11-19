<?php
// GET  /api/admin/deals.php  → all deals + extras
// POST /api/admin/deals.php  → update a deal {id, price, items_en[], items_es[], img}
require dirname(__DIR__) . '/config.php';
require_admin();

$pdo = db();
$m   = $_SERVER['REQUEST_METHOD'];

if ($m === 'GET') {
    $deals  = $pdo->query("SELECT * FROM deals ORDER BY num")->fetchAll();
    $extras = $pdo->query("SELECT * FROM extras ORDER BY sort")->fetchAll();
    foreach ($deals as &$d) {
        $d['items_en'] = json_decode($d['items_en'], true);
        $d['items_es'] = json_decode($d['items_es'], true);
    }
    json_out(['deals' => $deals, 'extras' => $extras]);
}

if ($m === 'POST') {
    $in = body();
    $id = (int)($in['id'] ?? 0);
    if (!$id) json_out(['error' => 'id'], 400);

    $itemsEn = array_values(array_filter(array_map('trim', $in['items_en'] ?? [])));
    $itemsEs = array_values(array_filter(array_map('trim', $in['items_es'] ?? [])));
    $price   = (float)str_replace(',', '.', (string)($in['price'] ?? 0));
    if (!count($itemsEn) || !count($itemsEs) || $price <= 0) {
        json_out(['error' => 'invalid'], 400);
    }

    $pdo->prepare(
        "UPDATE deals SET price = ?, items_en = ?, items_es = ?, img = ? WHERE id = ?"
    )->execute([
        $price,
        json_encode($itemsEn, JSON_UNESCAPED_UNICODE),
        json_encode($itemsEs, JSON_UNESCAPED_UNICODE),
        substr(trim($in['img'] ?? ''), 0, 255),
        $id,
    ]);
    json_out(['ok' => true]);
}

json_out(['error' => 'method'], 405);

<?php
// GET /api/menu.php  →  full menu as {en:{...}, es:{...}}
require __DIR__ . '/config.php';

try {
    $pdo      = db();
    $sections = $pdo->query("SELECT * FROM sections ORDER BY sort")->fetchAll();
    $items    = $pdo->query("SELECT * FROM items ORDER BY section_id, sort")->fetchAll();
    $deals    = $pdo->query("SELECT * FROM deals ORDER BY num")->fetchAll();
    $extras   = $pdo->query("SELECT * FROM extras ORDER BY sort")->fetchAll();

    $bySection = [];
    foreach ($items as $it) {
        $bySection[$it['section_id']][] = $it;
    }

    $out = ['en' => ['combos' => [], 'extras' => [], 'sections' => []],
            'es' => ['combos' => [], 'extras' => [], 'sections' => []]];

    foreach (['en', 'es'] as $lang) {
        foreach ($sections as $s) {
            $sizes = $s['sizes'] ? json_decode($s['sizes'], true) : null;
            $sec = [
                'id'    => $s['skey'],
                'label' => $s['label_' . $lang],
                'note'  => $s['note_' . $lang],
                'items' => [],
            ];
            if ($sizes) {
                $sec['sizes']      = array_map(fn($x) => $x[$lang], $sizes);
                $sec['shortSizes'] = array_map(fn($x) => $x['s' . $lang], $sizes);
            }
            foreach ($bySection[$s['id']] ?? [] as $it) {
                $sec['items'][] = [
                    (int)$it['num'],
                    $it['name_' . $lang],
                    $it['desc_' . $lang],
                    json_decode($it['prices'], true),
                ];
            }
            $out[$lang]['sections'][] = $sec;
        }

        foreach ($deals as $d) {
            $img = $d['img'] ?: '';
            if ($img && !str_starts_with($img, 'http')) {
                $img = "https://loremflickr.com/640/420/{$img}";
            }
            $out[$lang]['combos'][] = [
                'n'     => (int)$d['num'],
                'items' => json_decode($d['items_' . $lang], true),
                'price' => number_format((float)$d['price'], 2, '.', ''),
                'tag'   => $d['tag'],
                'img'   => $img,
            ];
        }

        foreach ($extras as $e) {
            $out[$lang]['extras'][] = $e['html_' . $lang];
        }
    }

    json_out($out);
} catch (Throwable $e) {
    json_out(['error' => 'db_unavailable'], 500);
}

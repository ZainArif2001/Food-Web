<?php
// POST /api/auth.php  {username, password} → login
// GET  /api/auth.php  → {logged: bool}
// DELETE /api/auth.php → logout
require __DIR__ . '/config.php';

$m = $_SERVER['REQUEST_METHOD'];

if ($m === 'GET') {
    json_out(['logged' => !empty($_SESSION['admin_id'])]);
}

if ($m === 'DELETE') {
    session_destroy();
    json_out(['ok' => true]);
}

if ($m === 'POST') {
    $in   = body();
    $stmt = db()->prepare("SELECT * FROM admins WHERE username = ?");
    $stmt->execute([trim($in['username'] ?? '')]);
    $a = $stmt->fetch();

    if ($a && password_verify($in['password'] ?? '', $a['pass_hash'])) {
        session_regenerate_id(true);
        $_SESSION['admin_id'] = $a['id'];
        json_out(['ok' => true]);
    }
    json_out(['error' => 'bad_credentials'], 401);
}

json_out(['error' => 'method'], 405);

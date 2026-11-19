<?php
// ============================================================
// DB config — copy this file to "config.php" and fill in your
// MySQL credentials. config.php is gitignored (stays private).
// ============================================================
const DB_HOST = '127.0.0.1';
const DB_NAME = 'bc_food';
const DB_USER = 'root';
const DB_PASS = '';          // <-- your MySQL password here

session_start();

function db() {
    static $pdo = null;
    if ($pdo === null) {
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]
        );
    }
    return $pdo;
}

function json_out($data, $code = 200) {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function body() {
    $j = json_decode(file_get_contents('php://input'), true);
    return is_array($j) ? $j : $_POST;
}

function require_admin() {
    if (empty($_SESSION['admin_id'])) {
        json_out(['error' => 'unauthorized'], 401);
    }
}

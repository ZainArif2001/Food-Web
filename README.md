# Food-Web

Website for **B&C Döner Kebab & Pizzeria** — Calle Brasil, Nº7 Bajo, 46018 Valencia.

Works in **two modes**:

- **Static** (Netlify): plain HTML/CSS/JS, menu data built into `app.js`
- **Dynamic** (local PHP + MySQL): menu & orders served from a database, with an admin panel

## Files

- `index.html` / `styles.css` — the site
- `app.js` — menu data + all frontend logic (edit prices here in static mode)
- `db/database.sql` — MySQL schema + seed (full EN/ES menu)
- `api/` — PHP endpoints (`menu`, `orders`, `auth`, `admin/*`)
- `admin/` — admin panel (login: **admin / admin123** — change it!)

## Static mode (current hosting)

Just open `index.html` or serve statically — no DB needed:

```bash
python3 -m http.server 8000
```

## Dynamic mode (local PHP + MySQL)

1. Import the database in MySQL Workbench:
   - open `db/database.sql` → run it (creates `bc_food` + all data)
2. Copy `api/config.sample.php` → `api/config.php` and set your MySQL user/password
   - `api/config.php` is gitignored — credentials never go to GitHub
3. Run PHP's built-in server from the project root:

   ```bash
   php -S localhost:8000
   ```

4. Open:
   - Site: `http://localhost:8000`
   - Admin panel: `http://localhost:8000/admin/` (admin / admin123)

The frontend auto-detects the API — with PHP running, menu comes from the DB and orders are saved; without it, the built-in static data is used.

## API endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `api/menu.php` | GET | Full menu `{en, es}` |
| `api/orders.php` | POST | Save an order (server-side total, €10 delivery min) |
| `api/auth.php` | POST/GET/DELETE | Admin login / status / logout |
| `api/admin/items.php` | GET/POST | List + update items & prices |
| `api/admin/deals.php` | GET/POST | List + update meal deals |
| `api/admin/orders.php` | GET/POST | List + update order status |

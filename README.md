# Food-Web

Static website for **B&C Döner Kebab & Pizzería** — Calle Brasil, Nº7 Bajo, 46018 Valencia.

## Files

- `index.html` — page structure (hero, menús, carta, contacto)
- `styles.css` — all styling, fully responsive
- `app.js` — **menu data + rendering** (all prices live here, edit in one place)

## Run locally

No build step needed — just open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Updating prices

Edit the item arrays at the top of `app.js` (`COMBOS`, `SECTIONS`). The page renders everything from that data.

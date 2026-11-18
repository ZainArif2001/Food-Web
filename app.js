/* ============================================================
   B&C Döner Kebab & Pizzería — Datos de la carta
   Para cambiar precios, edita solo los números de abajo.
   ============================================================ */

const COMBOS = [
  { n: 1, items: ["1 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 33cl"], price: "6,95€", tag: "El más pedido" },
  { n: 2, items: ["2 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "8,95€" },
  { n: 3, items: ["3 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "15,95€" },
  { n: 4, items: ["Alitas de pollo (6 und), nuggets (6 und) o falafel (6 und)", "Patatas fritas", "Bebida 33cl"], price: "6,95€" },
  { n: 5, items: ["Hamburguesa de pollo", "Patatas fritas", "Bebida 33cl"], price: "6,95€" },
  { n: 6, items: ["1 Pizza mediana", "2 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "18,95€" },
  { n: 7, items: ["1 Pizza familiar", "Bebida 2L"], price: "16,95€" },
  { n: 8, items: ["2 Pizzas grandes", "Ensalada basic", "Bebida 2L"], price: "22,95€" },
];

const MENU_EXTRAS = [
  "Pollo <b>+0,50€</b>",
  "Mixto <b>+0,50€</b>",
  "Queso <b>+1,00€</b>",
  "Solo carne <b>+1,00€</b>",
  "Patatas <b>+1,00€</b>",
  "Pan rollo <b>+0,50€</b>",
  "Box normal <b>4,50€</b> · Box grande <b>5,50€</b>",
];

const SECTIONS = [
  {
    id: "pizzas",
    label: "Pizzas",
    sizes: ["Mediana 25cm", "Grande 30cm", "Familiar 40cm"],
    shortSizes: ["Med.", "Gran.", "Fam."],
    note: "Ingredientes extra: <b>Mediana +0,50€</b> · <b>Grande +1,00€</b> · <b>Familiar +1,50€</b>",
    items: [
      [1,  "Margarita",      "Tomate, mozzarella y orégano",                                                   ["7,00", "8,00", "11,00"]],
      [2,  "Cuatro Quesos",  "Tomate, mozzarella, queso gouda, cheddar, gorgonzola y orégano",                 ["8,00", "9,00", "13,50"]],
      [3,  "Barbacoa",       "Salsa barbacoa, mozzarella, jamón york, ternera, cebolla y orégano",             ["7,00", "8,50", "12,50"]],
      [4,  "Infierno",       "Tomate, mozzarella, ternera, pimiento verde y orégano",                          ["7,00", "8,50", "12,50"]],
      [5,  "Mediterránea",   "Tomate, mozzarella, pimiento rojo, pimiento verde, atún y orégano",              ["7,00", "8,50", "12,50"]],
      [6,  "Napolitana",     "Tomate, mozzarella, anchoas, olivas negras y orégano",                           ["7,00", "8,50", "12,50"]],
      [7,  "Serrana",        "Tomate, mozzarella, jamón serrano, tomate en dados, aceite de oliva y orégano",  ["7,00", "8,50", "12,50"]],
      [8,  "Veneciana",      "Tomate, mozzarella, atún, olivas verdes, cebolla y orégano",                     ["7,00", "8,50", "12,50"]],
      [9,  "4 Estaciones",   "Tomate, mozzarella, jamón york, champiñones, olivas, salami y orégano",          ["7,00", "8,50", "12,50"]],
      [10, "Calzone",        "Tomate, mozzarella, salami, champiñones y orégano",                              ["7,00", "8,50", "12,50"]],
      [11, "Vegetal",        "Tomate, mozzarella, berenjena, calabacín, cebolla, pimiento y orégano",          ["7,00", "8,50", "12,50"]],
      [12, "Desi",           "Tomate, mozzarella, pollo, pimiento, cebolla, aceitunas, picante y orégano",     ["8,00", "10,00", "14,50"]],
      [13, "Kebab",          "Tomate, mozzarella, carne de kebab, salsa blanca y orégano",                     ["7,00", "8,50", "12,50"]],
      [14, "Mixto",          "Tomate, mozzarella, carne de pollo, ternera y orégano",                          ["7,00", "8,50", "12,50"]],
      [15, "Punjabi",        "Tomate, queso, ternera picante, cebolla y orégano",                              ["7,00", "8,50", "12,50"]],
      [16, "Halal",          "Tomate, queso, pollo, cebolla, pimiento y orégano",                              ["7,00", "8,50", "12,50"]],
      [17, "Hawaiana",       "Tomate, mozzarella, jamón york, piña, champiñones y orégano",                    ["7,00", "8,50", "12,50"]],
      [18, "Salami",         "Tomate, mozzarella, salami y orégano",                                           ["7,00", "8,50", "12,50"]],
      [19, "Pepperoni",      "Tomate, mozzarella, pepperoni y orégano",                                        ["7,00", "8,50", "12,50"]],
      [20, "Carbonara",      "Tomate, mozzarella, jamón york, cebolla, nata y orégano",                        ["7,50", "9,00", "13,50"]],
      [21, "Italiana",       "Tomate, queso, pimiento, atún, salami y orégano",                                ["7,00", "8,50", "12,50"]],
      [22, "Marinera",       "Tomate, queso, gamba, atún, cebolla y orégano",                                  ["7,00", "8,50", "12,50"]],
      [23, "B&C",            "Tomate, queso, huevo, olivas, salami y orégano",                                 ["7,00", "8,50", "12,50"]],
      [24, "España",         "Tomate, mozzarella, champiñón, bacon, jamón york y orégano",                     ["7,00", "8,50", "12,50"]],
      [25, "Caprichosa",     "Tomate, mozzarella, pollo, ternera, cebolla, huevo y orégano",                   ["7,00", "8,50", "12,50"]],
    ],
  },
  {
    id: "kebab-normal",
    label: "Döner · Pan Normal",
    sizes: ["Normal", "Grande"],
    shortSizes: ["Norm.", "Gran."],
    note: "Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas · Pollo <b>+0,50€</b>",
    items: [
      [46, "Döner Normal",              "De pollo o ternera",                                     ["4,00", "5,00"]],
      [47, "Döner Mixto",               "De pollo y ternera",                                     ["4,50", "5,50"]],
      [48, "Döner Solo Carne",          "De pollo o ternera · pan y salsas",                      ["5,00", "6,50"]],
      [49, "Döner Mixto Solo Carne",    "De pollo y ternera · pan y salsas",                      ["5,50", "7,50"]],
      [50, "Döner con Queso",           "De pollo o ternera",                                     ["4,50", "5,50"]],
      [51, "Döner Vegetal",             "Lechuga, tomate, cebolla, maíz, queso y salsas",         ["4,00", "4,50"]],
      [52, "Döner con Falafel",         "Falafel, queso, lechuga, tomate, cebolla, maíz y salsas",["4,00", "4,50"]],
      [53, "Döner Barbacoa",            "De pollo o ternera · salsa barbacoa",                    ["4,50", "5,50"]],
      [54, "Döner con Patatas Fritas",  "De pollo o ternera · patatas fritas dentro",             ["5,00", "6,00"]],
      [55, "Döner Mixto con Patatas",   "De pollo y ternera · patatas fritas dentro",             ["5,50", "6,50"]],
      [56, "Döner en Plato",            "De pollo o ternera · patatas fritas y salsas",           ["6,50", "7,50"]],
    ],
  },
  {
    id: "kebab-rollo",
    label: "Döner · Pan Rollo",
    sizes: ["Normal", "Grande"],
    shortSizes: ["Norm.", "Gran."],
    note: "Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas",
    items: [
      [57, "Döner Normal",              "De pollo o ternera",                                     ["4,50", "5,50"]],
      [58, "Döner Mixto",               "De pollo y ternera",                                     ["5,00", "6,00"]],
      [59, "Döner Solo Carne",          "De pollo o ternera · pan y salsas",                      ["6,00", "7,50"]],
      [60, "Döner Mixto Solo Carne",    "De pollo y ternera · pan y salsas",                      ["6,50", "8,00"]],
      [61, "Döner con Queso",           "De pollo o ternera",                                     ["5,50", "6,50"]],
      [62, "Döner Vegetal",             "Lechuga, tomate, cebolla, maíz, queso y salsas",         ["4,00", "5,00"]],
      [63, "Döner con Falafel",         "Falafel, queso, lechuga, tomate, cebolla, maíz y salsas",["4,50", "5,50"]],
      [64, "Döner Barbacoa",            "De pollo o ternera · salsa barbacoa",                    ["5,00", "6,00"]],
      [65, "Döner con Patatas Fritas",  "De pollo o ternera · patatas fritas dentro",             ["5,50", "6,50"]],
      [66, "Döner Mixto con Patatas",   "De pollo y ternera · patatas fritas dentro",             ["6,00", "7,00"]],
      [67, "Döner en Plato",            "De pollo o ternera · patatas fritas y salsas",           ["6,50", "7,50"]],
    ],
  },
  {
    id: "tapas",
    label: "Tapas",
    note: "Te apetece algo para picar",
    items: [
      [26, "6 Nuggets con Patatas Fritas",   "", "6,00"],
      [27, "6 Croquetas con Patatas Fritas", "", "5,00"],
      [28, "6 Alitas con Patatas Fritas",    "", "6,00"],
      [29, "2 Samosas de Verduras",          "", "3,50"],
      [30, "2 Samosas de Carne",             "", "4,50"],
      [31, "Patatas Fritas",                 "", "3,00"],
      [32, "Patatas Bravas o Deluxe",        "", "3,50"],
      [33, "8 Aros de Cebolla",              "", "4,00"],
      [34, "Hamburguesa de Pollo",           "", "4,50"],
    ],
  },
  {
    id: "ensaladas",
    label: "Ensaladas",
    items: [
      [35, "Ensalada Basic",      "Lechuga, tomate, maíz, pepino y salsa",                            "3,50"],
      [36, "Ensalada B&C",        "Lechuga, tomate, maíz, mozzarella y pechuga de pollo",             "5,00"],
      [37, "Ensalada Valenciana", "Lechuga, tomate, maíz, pepino, cebolla, olivas, huevo y atún",     "5,00"],
      [38, "Ensalada España",     "Lechuga, tomate, jamón york, queso, aceitunas y piña",             "5,50"],
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      [39, "Refrescos 33cl",          "Coca-Cola, Cola Light y Zero, Fanta, Aquarius, Sprite, Nestea", "1,40"],
      [40, "Refrescos 2L",            "Coca-Cola, Cola Light y Zero, Fanta, Sprite",                   "2,90"],
      [41, "Agua Pequeña",            "",                                                              "1,00"],
      [42, "Agua Grande 1,5L",        "",                                                              "1,40"],
      [43, "Monster / Red Bull",      "",                                                              "2,50"],
      [44, "Bebidas Energéticas",     "Variedad",                                                      "2,50"],
      [45, "Bebidas Latinas",         "Variedad",                                                      "2,50"],
    ],
  },
];

/* ============================================================
   Render
   ============================================================ */

const euro = (v) => `${v}€`;

function renderCombos() {
  const grid = document.getElementById("comboGrid");
  grid.innerHTML = COMBOS.map((c) => `
    <article class="combo reveal">
      ${c.tag ? `<span class="combo-tag">${c.tag}</span>` : ""}
      <h3>Menú ${c.n}</h3>
      <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      <div class="combo-price">${c.price} <small>/ menú</small></div>
    </article>
  `).join("");

  document.getElementById("extrasBar").innerHTML =
    `<span class="extras-title">Extras de menú</span>` +
    MENU_EXTRAS.map((e) => `<span>${e}</span>`).join("");
}

function renderTabs() {
  const tabs = document.getElementById("menuTabs");
  const panels = document.getElementById("menuPanels");

  tabs.innerHTML = SECTIONS.map((s, i) =>
    `<button class="tab${i === 0 ? " active" : ""}" role="tab" data-target="${s.id}">${s.label}</button>`
  ).join("");

  panels.innerHTML = SECTIONS.map((s, i) => {
    const multi = s.sizes && s.sizes.length > 1;
    const head = multi
      ? `<div class="menu-cols-head"><span>Cuando nos hagas el pedido, indícanos el número</span>
           <span class="sizes">${s.shortSizes.map((x) => `<span>${x}</span>`).join("")}</span></div>`
      : "";

    const rows = s.items.map(([num, name, desc, prices]) => {
      const arr = Array.isArray(prices) ? prices : [prices];
      const tags = arr.map((p, j) =>
        `<span class="price-tag${j === arr.length - 1 && multi ? " hot" : ""}" data-size="${multi ? s.shortSizes[j] : ""}">${euro(p)}</span>`
      ).join("");
      return `<div class="menu-row${multi ? "" : " single"}">
        <div class="menu-item">
          <span class="menu-num">${num}</span>
          <div>
            <div class="menu-name">${name}</div>
            ${desc ? `<div class="menu-desc">${desc}</div>` : ""}
          </div>
        </div>
        <div class="menu-prices">${tags}</div>
      </div>`;
    }).join("");

    return `<div class="panel${i === 0 ? " active" : ""}" id="panel-${s.id}" role="tabpanel">
      <div class="menu-list">${head}${rows}</div>
      ${s.note ? `<p class="panel-note">${s.note}</p>` : ""}
    </div>`;
  }).join("");

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === btn));
    panels.querySelectorAll(".panel").forEach((p) =>
      p.classList.toggle("active", p.id === `panel-${btn.dataset.target}`)
    );
  });
}

/* ---------- Interactions ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      toggle.classList.remove("open");
      links.classList.remove("open");
    }
  });
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

renderCombos();
renderTabs();
initNav();
initReveal();
document.getElementById("year").textContent = new Date().getFullYear();

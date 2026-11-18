/* ============================================================
   B&C Döner Kebab & Pizzeria — Menu data
   To change prices, just edit the numbers below.
   ============================================================ */

const COMBOS = [
  { n: 1, items: ["1 Döner kebab regular (normal bread)", "Fries", "Drink 33cl"], price: "€6.95", tag: "Most popular" },
  { n: 2, items: ["2 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "€8.95" },
  { n: 3, items: ["3 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "€15.95" },
  { n: 4, items: ["Chicken wings (6 pcs), nuggets (6 pcs) or falafel (6 pcs)", "Fries", "Drink 33cl"], price: "€6.95" },
  { n: 5, items: ["Chicken burger", "Fries", "Drink 33cl"], price: "€6.95" },
  { n: 6, items: ["1 Medium pizza", "2 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "€18.95" },
  { n: 7, items: ["1 Family pizza", "Drink 2L"], price: "€16.95" },
  { n: 8, items: ["2 Large pizzas", "Basic salad", "Drink 2L"], price: "€22.95" },
];

const MENU_EXTRAS = [
  "Chicken <b>+€0.50</b>",
  "Mixed <b>+€0.50</b>",
  "Cheese <b>+€1.00</b>",
  "Meat only <b>+€1.00</b>",
  "Fries <b>+€1.00</b>",
  "Wrap bread <b>+€0.50</b>",
  "Regular box <b>€4.50</b> · Large box <b>€5.50</b>",
];

const SECTIONS = [
  {
    id: "pizzas",
    label: "Pizzas",
    sizes: ["Medium 25cm", "Large 30cm", "Family 40cm"],
    shortSizes: ["Med.", "Lge.", "Fam."],
    note: "Extra toppings: <b>Medium +€0.50</b> · <b>Large +€1.00</b> · <b>Family +€1.50</b>",
    items: [
      [1,  "Margarita",      "Tomato, mozzarella and oregano",                                                  ["7.00", "8.00", "11.00"]],
      [2,  "Cuatro Quesos",  "Tomato, mozzarella, gouda, cheddar, gorgonzola and oregano",                      ["8.00", "9.00", "13.50"]],
      [3,  "Barbacoa",       "BBQ sauce, mozzarella, ham, beef, onion and oregano",                             ["7.00", "8.50", "12.50"]],
      [4,  "Infierno",       "Tomato, mozzarella, beef, green pepper and oregano",                              ["7.00", "8.50", "12.50"]],
      [5,  "Mediterránea",   "Tomato, mozzarella, red pepper, green pepper, tuna and oregano",                  ["7.00", "8.50", "12.50"]],
      [6,  "Napolitana",     "Tomato, mozzarella, anchovies, black olives and oregano",                         ["7.00", "8.50", "12.50"]],
      [7,  "Serrana",        "Tomato, mozzarella, serrano ham, diced tomato, olive oil and oregano",            ["7.00", "8.50", "12.50"]],
      [8,  "Veneciana",      "Tomato, mozzarella, tuna, green olives, onion and oregano",                       ["7.00", "8.50", "12.50"]],
      [9,  "4 Estaciones",   "Tomato, mozzarella, ham, mushrooms, olives, salami and oregano",                  ["7.00", "8.50", "12.50"]],
      [10, "Calzone",        "Tomato, mozzarella, salami, mushrooms and oregano",                               ["7.00", "8.50", "12.50"]],
      [11, "Vegetal",        "Tomato, mozzarella, eggplant, zucchini, onion, pepper and oregano",               ["7.00", "8.50", "12.50"]],
      [12, "Desi",           "Tomato, mozzarella, chicken, pepper, onion, olives, chilli and oregano",          ["8.00", "10.00", "14.50"]],
      [13, "Kebab",          "Tomato, mozzarella, kebab meat, white sauce and oregano",                         ["7.00", "8.50", "12.50"]],
      [14, "Mixto",          "Tomato, mozzarella, chicken, beef and oregano",                                   ["7.00", "8.50", "12.50"]],
      [15, "Punjabi",        "Tomato, cheese, spicy beef, onion and oregano",                                   ["7.00", "8.50", "12.50"]],
      [16, "Halal",          "Tomato, cheese, chicken, onion, pepper and oregano",                              ["7.00", "8.50", "12.50"]],
      [17, "Hawaiana",       "Tomato, mozzarella, ham, pineapple, mushrooms and oregano",                       ["7.00", "8.50", "12.50"]],
      [18, "Salami",         "Tomato, mozzarella, salami and oregano",                                          ["7.00", "8.50", "12.50"]],
      [19, "Pepperoni",      "Tomato, mozzarella, pepperoni and oregano",                                       ["7.00", "8.50", "12.50"]],
      [20, "Carbonara",      "Tomato, mozzarella, ham, onion, cream and oregano",                               ["7.50", "9.00", "13.50"]],
      [21, "Italiana",       "Tomato, cheese, pepper, tuna, salami and oregano",                                ["7.00", "8.50", "12.50"]],
      [22, "Marinera",       "Tomato, cheese, prawns, tuna, onion and oregano",                                 ["7.00", "8.50", "12.50"]],
      [23, "B&C",            "Tomato, cheese, egg, olives, salami and oregano",                                 ["7.00", "8.50", "12.50"]],
      [24, "España",         "Tomato, mozzarella, mushroom, bacon, ham and oregano",                            ["7.00", "8.50", "12.50"]],
      [25, "Caprichosa",     "Tomato, mozzarella, chicken, beef, onion, egg and oregano",                       ["7.00", "8.50", "12.50"]],
    ],
  },
  {
    id: "kebab-normal",
    label: "Döner · Regular Bread",
    sizes: ["Regular", "Large"],
    shortSizes: ["Reg.", "Lge."],
    note: "All döner include bread, lettuce, tomato, onion, corn and sauces · Chicken <b>+€0.50</b>",
    items: [
      [46, "Döner Regular",             "Chicken or beef",                                        ["4.00", "5.00"]],
      [47, "Döner Mixed",               "Chicken and beef",                                       ["4.50", "5.50"]],
      [48, "Döner Meat Only",           "Chicken or beef · bread and sauces",                     ["5.00", "6.50"]],
      [49, "Döner Mixed Meat Only",     "Chicken and beef · bread and sauces",                    ["5.50", "7.50"]],
      [50, "Döner with Cheese",         "Chicken or beef",                                        ["4.50", "5.50"]],
      [51, "Döner Veggie",              "Lettuce, tomato, onion, corn, cheese and sauces",        ["4.00", "4.50"]],
      [52, "Döner with Falafel",        "Falafel, cheese, lettuce, tomato, onion, corn, sauces",  ["4.00", "4.50"]],
      [53, "Döner BBQ",                 "Chicken or beef · BBQ sauce",                            ["4.50", "5.50"]],
      [54, "Döner with Fries",          "Chicken or beef · fries inside",                         ["5.00", "6.00"]],
      [55, "Döner Mixed with Fries",    "Chicken and beef · fries inside",                        ["5.50", "6.50"]],
      [56, "Döner on a Plate",          "Chicken or beef · fries and sauces",                     ["6.50", "7.50"]],
    ],
  },
  {
    id: "kebab-rollo",
    label: "Döner · Wrap Bread",
    sizes: ["Regular", "Large"],
    shortSizes: ["Reg.", "Lge."],
    note: "All döner include bread, lettuce, tomato, onion, corn and sauces",
    items: [
      [57, "Döner Regular",             "Chicken or beef",                                        ["4.50", "5.50"]],
      [58, "Döner Mixed",               "Chicken and beef",                                       ["5.00", "6.00"]],
      [59, "Döner Meat Only",           "Chicken or beef · bread and sauces",                     ["6.00", "7.50"]],
      [60, "Döner Mixed Meat Only",     "Chicken and beef · bread and sauces",                    ["6.50", "8.00"]],
      [61, "Döner with Cheese",         "Chicken or beef",                                        ["5.50", "6.50"]],
      [62, "Döner Veggie",              "Lettuce, tomato, onion, corn, cheese and sauces",        ["4.00", "5.00"]],
      [63, "Döner with Falafel",        "Falafel, cheese, lettuce, tomato, onion, corn, sauces",  ["4.50", "5.50"]],
      [64, "Döner BBQ",                 "Chicken or beef · BBQ sauce",                            ["5.00", "6.00"]],
      [65, "Döner with Fries",          "Chicken or beef · fries inside",                         ["5.50", "6.50"]],
      [66, "Döner Mixed with Fries",    "Chicken and beef · fries inside",                        ["6.00", "7.00"]],
      [67, "Döner on a Plate",          "Chicken or beef · fries and sauces",                     ["6.50", "7.50"]],
    ],
  },
  {
    id: "tapas",
    label: "Sides",
    note: "Fancy something to snack on",
    items: [
      [26, "6 Nuggets with Fries",      "", "6.00"],
      [27, "6 Croquettes with Fries",   "", "5.00"],
      [28, "6 Chicken Wings with Fries","", "6.00"],
      [29, "2 Veggie Samosas",          "", "3.50"],
      [30, "2 Meat Samosas",            "", "4.50"],
      [31, "Fries",                     "", "3.00"],
      [32, "Patatas Bravas or Deluxe",  "", "3.50"],
      [33, "8 Onion Rings",             "", "4.00"],
      [34, "Chicken Burger",            "", "4.50"],
    ],
  },
  {
    id: "ensaladas",
    label: "Salads",
    items: [
      [35, "Basic Salad",       "Lettuce, tomato, corn, cucumber and dressing",                        "3.50"],
      [36, "B&C Salad",         "Lettuce, tomato, corn, mozzarella and chicken breast",                "5.00"],
      [37, "Valencian Salad",   "Lettuce, tomato, corn, cucumber, onion, olives, egg and tuna",        "5.00"],
      [38, "España Salad",      "Lettuce, tomato, ham, cheese, olives and pineapple",                  "5.50"],
    ],
  },
  {
    id: "bebidas",
    label: "Drinks",
    items: [
      [39, "Soft Drinks 33cl",      "Coca-Cola, Coke Light & Zero, Fanta, Aquarius, Sprite, Nestea",   "1.40"],
      [40, "Soft Drinks 2L",        "Coca-Cola, Coke Light & Zero, Fanta, Sprite",                     "2.90"],
      [41, "Small Water",           "",                                                                "1.00"],
      [42, "Large Water 1.5L",      "",                                                                "1.40"],
      [43, "Monster / Red Bull",    "",                                                                "2.50"],
      [44, "Energy Drinks",         "Assorted",                                                        "2.50"],
      [45, "Latin Drinks",          "Assorted",                                                        "2.50"],
    ],
  },
];

/* ============================================================
   Render
   ============================================================ */

const euro = (v) => `€${v}`;

function renderCombos() {
  const grid = document.getElementById("comboGrid");
  grid.innerHTML = COMBOS.map((c) => `
    <article class="combo reveal">
      ${c.tag ? `<span class="combo-tag">${c.tag}</span>` : ""}
      <div class="combo-body">
        <h3>Deal ${c.n}</h3>
        <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        <div class="combo-price">${c.price} <small>/ deal</small></div>
      </div>
    </article>
  `).join("");

  document.getElementById("extrasBar").innerHTML =
    `<span class="extras-title">Deal extras</span>` +
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
      ? `<div class="menu-cols-head"><span>Tell us the item number when ordering</span>
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

function initScrollSpy() {
  const links = document.querySelectorAll(".nav-links a[data-spy]");
  const map = {};
  links.forEach((l) => (map[l.dataset.spy] = l));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        map[en.target.id]?.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["menus", "carta", "info"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

function initPopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  if (localStorage.getItem("bc_popup_hide") || sessionStorage.getItem("bc_popup_seen")) return;

  const close = () => {
    if (document.getElementById("popupNever").checked) {
      localStorage.setItem("bc_popup_hide", "1");
    }
    sessionStorage.setItem("bc_popup_seen", "1");
    popup.classList.remove("show");
    document.body.style.overflow = "";
  };

  setTimeout(() => {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  }, 900);

  popup.querySelector(".popup-close").addEventListener("click", close);
  popup.addEventListener("click", (e) => { if (e.target === popup) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  popup.querySelectorAll("a.btn").forEach((a) => a.addEventListener("click", close));
}

renderCombos();
renderTabs();
initNav();
initReveal();
initScrollSpy();
initPopup();
document.getElementById("year").textContent = new Date().getFullYear();

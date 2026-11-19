/* ============================================================
   B&C Döner Kebab & Pizzeria — Menu data (bilingual)
   To change prices, just edit the numbers below.
   Photos: replace the IMG urls with your own photos anytime.
   ============================================================ */

/* ---------- UI strings ---------- */
const STR = {
  en: {
    "meta.title": "B&C Döner Kebab & Pizzeria — Valencia | Menu & Meal Deals",
    "topbar.hours": "Tue–Sun 12:30–00:00 · Mon 18:00–00:00",
    "nav.menus": "Meal Deals", "nav.carta": "Menu", "nav.order": "Order", "nav.info": "Contact", "nav.call": "Order now",
    "hero.kicker": "Calle Brasil Nº7 · Next to Avda. del CID · Valencia",
    "hero.sub": "Artisan pizzas from 25 to 40 cm, authentic döner kebab in regular bread or wrap, sides and fresh salads. Freshly made, just the way you like it.",
    "hero.cta": "View the menu",
    "pill.delivery": "Home delivery · min. €10", "pill.pay": "Card & Bizum", "pill.halal": "Halal options",
    "chip.doner": "Döner from <b>€4.00</b>", "chip.pizzas": "Pizzas <b>25–40 cm</b>", "chip.deals": "<b>8</b> meal deals",
    "m.1": "Artisan pizzas", "m.2": "Döner kebab", "m.3": "Wrap bread", "m.4": "Sides", "m.5": "Salads", "m.6": "Halal options", "m.7": "Home delivery",
    "step1.h": "Choose from the menu", "step1.p": "Just tell us the item number: pizzas 1–25, döner 46–67.",
    "step2.h": "Call or message us", "step2.p": "Order on 963 26 11 37 or WhatsApp 682 14 64 24.",
    "step3.h": "Delivery or pickup", "step3.p": "Home delivery with a €10 minimum order, or drop by Calle Brasil 7.",
    "menus.kicker": "Deals for everyone", "menus.h": "Our Meal Deals",
    "menus.sub": "The easiest way to eat well and save. Every deal includes fries and a drink.",
    "carta.kicker": "Tell us the item number when ordering", "carta.h": "Our Menu",
    "search.ph": "Search the menu — pepperoni, falafel, samosa…", "btn.print": "Print menu",
    "noscript": "Please enable JavaScript to view the full menu, or call us on <strong>963 26 11 37</strong>.",
    "cols.head": "Tell us the item number when ordering",
    "deal.h": "Deal", "deal.per": "/ deal", "deal.tag": "Most popular", "extras.title": "Deal extras",
    "status.open": "Open now · until 00:00", "status.closed": "Closed · opens today at {t}",
    "search.results": "<b>{n}</b> result{s} for “{q}”", "search.empty": "Nothing found for “{q}” — try another term.",
    "order.kicker": "Skip the call", "order.h": "Order Online",
    "order.sub": "Build your order and send it straight to our WhatsApp — we confirm right away.",
    "order.name": "Your name", "order.namePh": "e.g. Alex",
    "order.type": "Order type", "order.delivery": "Home delivery", "order.pickup": "Pickup",
    "order.addr": "Delivery address", "order.addrPh": "Street, number, floor…",
    "order.add": "Add items", "order.addBtn": "Add",
    "order.note": "Note (optional)", "order.notePh": "No onion, extra sauce…",
    "order.your": "Your order", "order.total": "Total", "order.send": "Send order on WhatsApp",
    "order.empty": "Your order is empty — pick something tasty above.",
    "order.warn": "Minimum order for home delivery is €10.",
    "order.hint": "Nothing is charged online — you pay on delivery or pickup.",
    "msg.title": "NEW ORDER — B&C", "msg.name": "Name", "msg.type": "Type",
    "msg.delivery": "Home delivery", "msg.pickup": "Pickup",
    "msg.addr": "Address", "msg.items": "Items", "msg.total": "Total", "msg.note": "Note",
    "info.kicker": "We're waiting for you", "info.h": "Hours & Contact",
    "hours.h": "Opening hours", "hours.tue": "Tuesday – Sunday", "hours.mon": "Monday",
    "findus.h": "Find us", "findus.addr": "Calle Brasil, Nº7 Bajo · 46018 Valencia · Next to Avda. del CID", "findus.link": "Get directions →",
    "phone.h": "Order by phone", "phone.muted": "Home delivery · Minimum order €10",
    "pay.h": "Payments", "pay.p": "We accept <strong>card</strong> and <strong>Bizum</strong>.", "pay.muted": "Fast, easy, no hassle.",
    "footer.rights": "All rights reserved",
    "popup.h1": "Hungry?", "popup.h2": "Order now",
    "popup.p": "Home delivery in Valencia — just tell us the item number and you're set.",
    "chip.min": "Min. order <b>€10</b>", "chip.pay": "Card / <b>Bizum</b>", "chip.hours": "Tue–Sun <b>12:30–00:00</b>",
    "popup.cta": "View the menu", "popup.call": "Call", "popup.never": "Don't show again",
    "a11y.menu": "Open menu", "a11y.close": "Close", "a11y.top": "Back to top", "a11y.call": "Call",
  },
  es: {
    "meta.title": "B&C Döner Kebab & Pizzería — Valencia | Carta y Menús",
    "topbar.hours": "Mar–Dom 12:30–00:00 · Lun 18:00–00:00",
    "nav.menus": "Menús", "nav.carta": "Carta", "nav.order": "Pedir", "nav.info": "Contacto", "nav.call": "Pedir ahora",
    "hero.kicker": "Calle Brasil Nº7 · Junto Avda. del CID · Valencia",
    "hero.sub": "Pizzas artesanas de 25 a 40 cm, auténtico döner kebab en pan normal o rollo, tapas y ensaladas frescas. Recién hecho, como a ti te gusta.",
    "hero.cta": "Ver la carta",
    "pill.delivery": "A domicilio · mín. 10€", "pill.pay": "Tarjeta y Bizum", "pill.halal": "Opciones halal",
    "chip.doner": "Döner desde <b>4,00€</b>", "chip.pizzas": "Pizzas <b>25–40 cm</b>", "chip.deals": "<b>8</b> menús",
    "m.1": "Pizzas artesanas", "m.2": "Döner kebab", "m.3": "Pan rollo", "m.4": "Tapas", "m.5": "Ensaladas", "m.6": "Opciones halal", "m.7": "A domicilio",
    "step1.h": "Elige de la carta", "step1.p": "Indícanos el número del plato: pizzas del 1 al 25, döner del 46 al 67.",
    "step2.h": "Llama o escribe", "step2.p": "Pedidos al 963 26 11 37 o por WhatsApp al 682 14 64 24.",
    "step3.h": "Recíbelo o recógelo", "step3.p": "A domicilio con pedido mínimo de 10€, o pásate por Calle Brasil 7.",
    "menus.kicker": "Combos para todos", "menus.h": "Nuestros Menús",
    "menus.sub": "La forma más fácil de comer bien y ahorrar. Todos los menús incluyen patatas y bebida.",
    "carta.kicker": "Indícanos el número al pedir", "carta.h": "Nuestra Carta",
    "search.ph": "Busca en la carta — pepperoni, falafel, samosa…", "btn.print": "Imprimir carta",
    "noscript": "Activa JavaScript para ver la carta completa, o llámanos al <strong>963 26 11 37</strong>.",
    "cols.head": "Cuando nos hagas el pedido, indícanos el número",
    "deal.h": "Menú", "deal.per": "/ menú", "deal.tag": "El más pedido", "extras.title": "Extras de menú",
    "status.open": "Abierto · hasta las 00:00", "status.closed": "Cerrado · abre hoy a las {t}",
    "search.results": "<b>{n}</b> resultado{s} para “{q}”", "search.empty": "No se encontró “{q}” — prueba con otra cosa.",
    "order.kicker": "Sin llamadas", "order.h": "Pide Online",
    "order.sub": "Monta tu pedido y envíalo directo a nuestro WhatsApp — confirmamos al momento.",
    "order.name": "Tu nombre", "order.namePh": "p. ej. Alex",
    "order.type": "Tipo de pedido", "order.delivery": "A domicilio", "order.pickup": "Para recoger",
    "order.addr": "Dirección de entrega", "order.addrPh": "Calle, número, piso…",
    "order.add": "Añadir platos", "order.addBtn": "Añadir",
    "order.note": "Nota (opcional)", "order.notePh": "Sin cebolla, extra salsa…",
    "order.your": "Tu pedido", "order.total": "Total", "order.send": "Enviar pedido por WhatsApp",
    "order.empty": "Tu pedido está vacío — añade algo rico arriba.",
    "order.warn": "El pedido mínimo a domicilio es de 10€.",
    "order.hint": "No se cobra nada online — pagas al recibir o recoger.",
    "msg.title": "NUEVO PEDIDO — B&C", "msg.name": "Nombre", "msg.type": "Tipo",
    "msg.delivery": "A domicilio", "msg.pickup": "Para recoger",
    "msg.addr": "Dirección", "msg.items": "Pedido", "msg.total": "Total", "msg.note": "Nota",
    "info.kicker": "Te esperamos", "info.h": "Horario y Contacto",
    "hours.h": "Horario", "hours.tue": "Martes – Domingo", "hours.mon": "Lunes",
    "findus.h": "Dónde estamos", "findus.addr": "Calle Brasil, Nº7 Bajo · 46018 Valencia · Junto Avda. del CID", "findus.link": "Cómo llegar →",
    "phone.h": "Pide por teléfono", "phone.muted": "Servicio a domicilio · Pedido mínimo 10€",
    "pay.h": "Pagos", "pay.p": "Aceptamos <strong>tarjeta</strong> y <strong>Bizum</strong>.", "pay.muted": "Rápido, cómodo y sin complicaciones.",
    "footer.rights": "Todos los derechos reservados",
    "popup.h1": "¿Con hambre?", "popup.h2": "Pide ahora",
    "popup.p": "A domicilio en Valencia — indícanos el número del plato y listo.",
    "chip.min": "Pedido mín. <b>10€</b>", "chip.pay": "Tarjeta / <b>Bizum</b>", "chip.hours": "Mar–Dom <b>12:30–00:00</b>",
    "popup.cta": "Ver la carta", "popup.call": "Llamar", "popup.never": "No volver a mostrar",
    "a11y.menu": "Abrir menú", "a11y.close": "Cerrar", "a11y.top": "Volver arriba", "a11y.call": "Llamar",
  },
};

/* ---------- Photos (replace with your own when you have them) ---------- */
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=70&auto=format`;
const PH = {
  pizza:   ["1513104890138-7c749659a591", "1574071318508-1cdbab80d002", "1565299624946-b28f40a0ae38", "1593560708920-61dd98c46a4e"],
  kebab:   "1599487488170-d11ec9c172f0",
  wrap:    "1626700051175-6818013e1d4f",
  burger:  "1568901346375-23c9450c58cd",
  salad:   ["1512621776951-a57141f2eefd", "1546069901-ba9599a7e63c"],
  nuggets: "1562967916-eb82221dfb92",
  wings:   "1626645738196-c2a7c87a8f58",
  samosa:  "1601050690597-df0568f70950",
  fries:   "1541592106381-b31e9677c0e5",
  rings:   "1639024471283-03518883512d",
  falafel: "1547058881-aa0edd92aab3",
  plate:   "1603360946369-dc9bb6258143",
  cola:    "1554866585-cd94860890b7",
  soda:    "1622483767028-3f66f32aef97",
  water:   "1523362628745-0c100150b504",
  juice:   "1613478223719-2ab802602423",
};
const ph = (cat, w, h, seed = 0) => {
  const p = PH[cat] || PH.pizza;
  return U(Array.isArray(p) ? p[seed % p.length] : p, w, h);
};

const IMG = {
  deals: {
    1: ph("kebab", 640, 420), 2: ph("wrap", 640, 420), 3: ph("kebab", 640, 420),
    4: ph("wings", 640, 420), 5: ph("burger", 640, 420),
    6: ph("pizza", 640, 420, 0), 7: ph("pizza", 640, 420, 1), 8: ph("pizza", 640, 420, 2),
  },
  sections: {
    "pizzas":       ph("pizza", 1200, 380, 3),
    "kebab-normal": ph("kebab", 1200, 380),
    "kebab-rollo":  ph("wrap", 1200, 380),
    "tapas":        ph("fries", 1200, 380),
    "ensaladas":    ph("salad", 1200, 380, 1),
    "bebidas":      ph("soda", 1200, 380),
  },
};

/* ---------- Menu data ---------- */
const DATA = {
  en: {
    combos: [
      { n: 1, items: ["1 Döner kebab regular (normal bread)", "Fries", "Drink 33cl"], price: "6.95", tag: "deal.tag" },
      { n: 2, items: ["2 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "8.95" },
      { n: 3, items: ["3 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "15.95" },
      { n: 4, items: ["Chicken wings (6 pcs), nuggets (6 pcs) or falafel (6 pcs)", "Fries", "Drink 33cl"], price: "6.95" },
      { n: 5, items: ["Chicken burger", "Fries", "Drink 33cl"], price: "6.95" },
      { n: 6, items: ["1 Medium pizza", "2 Döner kebab regular (normal bread)", "Fries", "Drink 2L"], price: "18.45" },
      { n: 7, items: ["1 Family pizza", "Drink 2L"], price: "16.45" },
      { n: 8, items: ["2 Large pizzas", "Basic salad", "Drink 2L"], price: "22.95" },
    ],
    extras: [
      "Chicken <b>+€0.50</b>", "Large <b>+€1.50</b>", "Mixed <b>+€0.50</b>", "Cheese <b>+€1.00</b>",
      "Meat only <b>+€1.00</b>", "Fries <b>+€1.00</b>", "Wrap bread <b>+€0.50</b>",
      "Regular box <b>€4.50</b> · Large box <b>€5.50</b>",
    ],
    sections: [
      {
        id: "pizzas", label: "Pizzas",
        sizes: ["Medium 25cm", "Large 30cm", "Family 40cm"], shortSizes: ["Med.", "Lge.", "Fam."],
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
          [19, "Pepperoni",      "Tomato, mozzarella, pepperoni and oregano",                                       ["7.00", "8.50", "13.50"]],
          [20, "Carbonara",      "Tomato, mozzarella, ham, onion, cream and oregano",                               ["7.50", "9.00", "13.50"]],
          [21, "Italiana",       "Tomato, cheese, pepper, tuna, salami and oregano",                                ["7.00", "8.50", "12.50"]],
          [22, "Marinera",       "Tomato, cheese, prawns, tuna, onion and oregano",                                 ["7.00", "8.50", "12.50"]],
          [23, "B&C",            "Tomato, cheese, egg, olives, salami and oregano",                                 ["7.00", "8.50", "12.50"]],
          [24, "España",         "Tomato, mozzarella, mushroom, bacon, ham and oregano",                            ["7.00", "8.50", "12.50"]],
          [25, "Caprichosa",     "Tomato, mozzarella, chicken, beef, onion, egg and oregano",                       ["7.00", "8.50", "12.50"]],
        ],
      },
      {
        id: "kebab-normal", label: "Döner · Regular Bread",
        sizes: ["Regular", "Large"], shortSizes: ["Reg.", "Lge."],
        note: "All döner include bread, lettuce, tomato, onion, corn and sauces · Chicken <b>+€0.50</b>",
        items: [
          [46, "Döner Regular",          "Chicken or beef",                                        ["4.00", "5.00"]],
          [47, "Döner Mixed",            "Chicken and beef",                                       ["4.50", "5.50"]],
          [48, "Döner Meat Only",        "Chicken or beef · bread and sauces",                     ["5.00", "6.50"]],
          [49, "Döner Mixed Meat Only",  "Chicken and beef · bread and sauces",                    ["5.50", "7.50"]],
          [50, "Döner with Cheese",      "Chicken or beef",                                        ["4.50", "5.50"]],
          [51, "Döner Veggie",           "Lettuce, tomato, onion, corn, cheese and sauces",        ["4.00", "4.50"]],
          [52, "Döner with Falafel",     "Falafel, cheese, lettuce, tomato, onion, corn, sauces",  ["4.50", "5.00"]],
          [53, "Döner BBQ",              "Chicken or beef · BBQ sauce",                            ["4.50", "5.50"]],
          [54, "Döner with Fries",       "Chicken or beef · fries inside",                         ["5.00", "6.00"]],
          [55, "Döner Mixed with Fries", "Chicken and beef · fries inside",                        ["5.50", "6.50"]],
          [56, "Döner on a Plate",       "Chicken or beef · fries and sauces",                     ["6.50", "7.50"]],
        ],
      },
      {
        id: "kebab-rollo", label: "Döner · Wrap Bread",
        sizes: ["Regular", "Large"], shortSizes: ["Reg.", "Lge."],
        note: "All döner include bread, lettuce, tomato, onion, corn and sauces",
        items: [
          [57, "Döner Regular",          "Chicken or beef",                                        ["4.50", "5.50"]],
          [58, "Döner Mixed",            "Chicken and beef",                                       ["5.00", "6.00"]],
          [59, "Döner Meat Only",        "Chicken or beef · bread and sauces",                     ["6.00", "7.50"]],
          [60, "Döner Mixed Meat Only",  "Chicken and beef · bread and sauces",                    ["6.50", "8.00"]],
          [61, "Döner with Cheese",      "Chicken or beef",                                        ["5.50", "6.50"]],
          [62, "Döner Veggie",           "Lettuce, tomato, onion, corn, cheese and sauces",        ["4.00", "5.00"]],
          [63, "Döner with Falafel",     "Falafel, cheese, lettuce, tomato, onion, corn, sauces",  ["4.50", "5.50"]],
          [64, "Döner BBQ",              "Chicken or beef · BBQ sauce",                            ["5.00", "6.00"]],
          [65, "Döner with Fries",       "Chicken or beef · fries inside",                         ["5.50", "6.50"]],
          [66, "Döner Mixed with Fries", "Chicken and beef · fries inside",                        ["6.00", "7.00"]],
          [67, "Döner on a Plate",       "Chicken or beef · fries and sauces",                     ["6.50", "7.50"]],
        ],
      },
      {
        id: "tapas", label: "Sides",
        note: "Fancy something to snack on",
        items: [
          [26, "6 Nuggets with Fries",       "", "6.00"],
          [27, "6 Croquettes with Fries",    "", "5.00"],
          [28, "6 Chicken Wings with Fries", "", "6.00"],
          [29, "2 Veggie Samosas",           "", "3.50"],
          [30, "2 Meat Samosas",             "", "4.50"],
          [31, "Fries",                      "", "3.00"],
          [32, "Patatas Bravas or Deluxe",   "", "3.50"],
          [33, "8 Onion Rings",              "", "4.00"],
          [34, "Chicken Burger",             "", "4.50"],
        ],
      },
      {
        id: "ensaladas", label: "Salads",
        items: [
          [35, "Basic Salad",     "Lettuce, tomato, corn, cucumber and dressing",                    "3.50"],
          [36, "B&C Salad",       "Lettuce, tomato, corn, mozzarella and chicken breast",            "5.00"],
          [37, "Valencian Salad", "Lettuce, tomato, corn, cucumber, onion, olives, egg and tuna",    "5.00"],
          [38, "España Salad",    "Lettuce, tomato, ham, cheese, olives and pineapple",              "5.50"],
        ],
      },
      {
        id: "bebidas", label: "Drinks",
        items: [
          [39, "Soft Drinks 33cl",   "Coca-Cola, Coke Light & Zero, Fanta, Aquarius, Sprite, Nestea", "1.40"],
          [40, "Soft Drinks 2L",     "Coca-Cola, Coke Light & Zero, Fanta, Sprite",                   "2.90"],
          [41, "Small Water",        "",                                                              "1.00"],
          [42, "Large Water 1.5L",   "",                                                              "1.40"],
          [43, "Monster / Red Bull", "",                                                              "2.50"],
          [44, "Energy Drinks",      "Assorted",                                                      "2.50"],
          [45, "Latin Drinks",       "Assorted",                                                      "2.50"],
        ],
      },
    ],
  },
  es: {
    combos: [
      { n: 1, items: ["1 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 33cl"], price: "6.95", tag: "deal.tag" },
      { n: 2, items: ["2 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "8.95" },
      { n: 3, items: ["3 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "15.95" },
      { n: 4, items: ["Alitas de pollo (6 ud), nuggets (6 ud) o falafel (6 ud)", "Patatas fritas", "Bebida 33cl"], price: "6.95" },
      { n: 5, items: ["Hamburguesa de pollo", "Patatas fritas", "Bebida 33cl"], price: "6.95" },
      { n: 6, items: ["1 Pizza mediana", "2 Döner kebab normal (pan normal)", "Patatas fritas", "Bebida 2L"], price: "18.45" },
      { n: 7, items: ["1 Pizza familiar", "Bebida 2L"], price: "16.45" },
      { n: 8, items: ["2 Pizzas grandes", "Ensalada basic", "Bebida 2L"], price: "22.95" },
    ],
    extras: [
      "Pollo <b>+0,50€</b>", "Grande <b>+1,50€</b>", "Mixto <b>+0,50€</b>", "Queso <b>+1,00€</b>",
      "Solo carne <b>+1,00€</b>", "Patatas <b>+1,00€</b>", "Pan rollo <b>+0,50€</b>",
      "Box normal <b>4,50€</b> · Box grande <b>5,50€</b>",
    ],
    sections: [
      {
        id: "pizzas", label: "Pizzas",
        sizes: ["Mediana 25cm", "Grande 30cm", "Familiar 40cm"], shortSizes: ["Med.", "Gran.", "Fam."],
        note: "Ingredientes extra: <b>Mediana +0,50€</b> · <b>Grande +1,00€</b> · <b>Familiar +1,50€</b>",
        items: [
          [1,  "Margarita",      "Tomate, mozzarella y orégano",                                                  ["7.00", "8.00", "11.00"]],
          [2,  "Cuatro Quesos",  "Tomate, mozzarella, queso gouda, cheddar, gorgonzola y orégano",                ["8.00", "9.00", "13.50"]],
          [3,  "Barbacoa",       "Salsa barbacoa, mozzarella, jamón york, ternera, cebolla y orégano",            ["7.00", "8.50", "12.50"]],
          [4,  "Infierno",       "Tomate, mozzarella, ternera, pimiento verde y orégano",                         ["7.00", "8.50", "12.50"]],
          [5,  "Mediterránea",   "Tomate, mozzarella, pimiento rojo, pimiento verde, atún y orégano",             ["7.00", "8.50", "12.50"]],
          [6,  "Napolitana",     "Tomate, mozzarella, anchoas, olivas negras y orégano",                          ["7.00", "8.50", "12.50"]],
          [7,  "Serrana",        "Tomate, mozzarella, jamón serrano, tomate en dados, aceite de oliva y orégano", ["7.00", "8.50", "12.50"]],
          [8,  "Veneciana",      "Tomate, mozzarella, atún, olivas verdes, cebolla y orégano",                    ["7.00", "8.50", "12.50"]],
          [9,  "4 Estaciones",   "Tomate, mozzarella, jamón york, champiñones, olivas, salami y orégano",         ["7.00", "8.50", "12.50"]],
          [10, "Calzone",        "Tomate, mozzarella, salami, champiñones y orégano",                             ["7.00", "8.50", "12.50"]],
          [11, "Vegetal",        "Tomate, mozzarella, berenjena, calabacín, cebolla, pimiento y orégano",         ["7.00", "8.50", "12.50"]],
          [12, "Desi",           "Tomate, mozzarella, pollo, pimiento, cebolla, aceitunas, picante y orégano",    ["8.00", "10.00", "14.50"]],
          [13, "Kebab",          "Tomate, mozzarella, carne de kebab, salsa blanca y orégano",                    ["7.00", "8.50", "12.50"]],
          [14, "Mixto",          "Tomate, mozzarella, carne de pollo, ternera y orégano",                         ["7.00", "8.50", "12.50"]],
          [15, "Punjabi",        "Tomate, queso, ternera picante, cebolla y orégano",                             ["7.00", "8.50", "12.50"]],
          [16, "Halal",          "Tomate, queso, pollo, cebolla, pimiento y orégano",                             ["7.00", "8.50", "12.50"]],
          [17, "Hawaiana",       "Tomate, mozzarella, jamón york, piña, champiñones y orégano",                   ["7.00", "8.50", "12.50"]],
          [18, "Salami",         "Tomate, mozzarella, salami y orégano",                                          ["7.00", "8.50", "12.50"]],
          [19, "Pepperoni",      "Tomate, mozzarella, pepperoni y orégano",                                       ["7.00", "8.50", "13.50"]],
          [20, "Carbonara",      "Tomate, mozzarella, jamón york, cebolla, nata y orégano",                       ["7.50", "9.00", "13.50"]],
          [21, "Italiana",       "Tomate, queso, pimiento, atún, salami y orégano",                               ["7.00", "8.50", "12.50"]],
          [22, "Marinera",       "Tomate, queso, gamba, atún, cebolla y orégano",                                 ["7.00", "8.50", "12.50"]],
          [23, "B&C",            "Tomate, queso, huevo, olivas, salami y orégano",                                ["7.00", "8.50", "12.50"]],
          [24, "España",         "Tomate, mozzarella, champiñón, bacon, jamón york y orégano",                    ["7.00", "8.50", "12.50"]],
          [25, "Caprichosa",     "Tomate, mozzarella, pollo, ternera, cebolla, huevo y orégano",                  ["7.00", "8.50", "12.50"]],
        ],
      },
      {
        id: "kebab-normal", label: "Döner · Pan Normal",
        sizes: ["Normal", "Grande"], shortSizes: ["Norm.", "Gran."],
        note: "Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas · Pollo <b>+0,50€</b>",
        items: [
          [46, "Döner Normal",              "De pollo o ternera",                                     ["4.00", "5.00"]],
          [47, "Döner Mixto",               "De pollo y ternera",                                     ["4.50", "5.50"]],
          [48, "Döner Solo Carne",          "De pollo o ternera · pan y salsas",                      ["5.00", "6.50"]],
          [49, "Döner Mixto Solo Carne",    "De pollo y ternera · pan y salsas",                      ["5.50", "7.50"]],
          [50, "Döner con Queso",           "De pollo o ternera",                                     ["4.50", "5.50"]],
          [51, "Döner Vegetal",             "Lechuga, tomate, cebolla, maíz, queso y salsas",         ["4.00", "4.50"]],
          [52, "Döner con Falafel",         "Falafel, queso, lechuga, tomate, cebolla, maíz y salsas",["4.50", "5.00"]],
          [53, "Döner Barbacoa",            "De pollo o ternera · salsa barbacoa",                    ["4.50", "5.50"]],
          [54, "Döner con Patatas",         "De pollo o ternera · patatas fritas dentro",             ["5.00", "6.00"]],
          [55, "Döner Mixto con Patatas",   "De pollo y ternera · patatas fritas dentro",             ["5.50", "6.50"]],
          [56, "Döner en Plato",            "De pollo o ternera · patatas fritas y salsas",           ["6.50", "7.50"]],
        ],
      },
      {
        id: "kebab-rollo", label: "Döner · Pan Rollo",
        sizes: ["Normal", "Grande"], shortSizes: ["Norm.", "Gran."],
        note: "Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas",
        items: [
          [57, "Döner Normal",              "De pollo o ternera",                                     ["4.50", "5.50"]],
          [58, "Döner Mixto",               "De pollo y ternera",                                     ["5.00", "6.00"]],
          [59, "Döner Solo Carne",          "De pollo o ternera · pan y salsas",                      ["6.00", "7.50"]],
          [60, "Döner Mixto Solo Carne",    "De pollo y ternera · pan y salsas",                      ["6.50", "8.00"]],
          [61, "Döner con Queso",           "De pollo o ternera",                                     ["5.50", "6.50"]],
          [62, "Döner Vegetal",             "Lechuga, tomate, cebolla, maíz, queso y salsas",         ["4.00", "5.00"]],
          [63, "Döner con Falafel",         "Falafel, queso, lechuga, tomate, cebolla, maíz y salsas",["4.50", "5.50"]],
          [64, "Döner Barbacoa",            "De pollo o ternera · salsa barbacoa",                    ["5.00", "6.00"]],
          [65, "Döner con Patatas",         "De pollo o ternera · patatas fritas dentro",             ["5.50", "6.50"]],
          [66, "Döner Mixto con Patatas",   "De pollo y ternera · patatas fritas dentro",             ["6.00", "7.00"]],
          [67, "Döner en Plato",            "De pollo o ternera · patatas fritas y salsas",           ["6.50", "7.50"]],
        ],
      },
      {
        id: "tapas", label: "Tapas",
        note: "¿Te apetece algo para picar?",
        items: [
          [26, "6 Nuggets con Patatas Fritas",   "", "6.00"],
          [27, "6 Croquetas con Patatas Fritas", "", "5.00"],
          [28, "6 Alitas con Patatas Fritas",    "", "6.00"],
          [29, "2 Samosas de Verduras",          "", "3.50"],
          [30, "2 Samosas de Carne",             "", "4.50"],
          [31, "Patatas Fritas",                 "", "3.00"],
          [32, "Patatas Bravas o Deluxe",        "", "3.50"],
          [33, "8 Aros de Cebolla",              "", "4.00"],
          [34, "Hamburguesa de Pollo",           "", "4.50"],
        ],
      },
      {
        id: "ensaladas", label: "Ensaladas",
        items: [
          [35, "Ensalada Basic",      "Lechuga, tomate, maíz, pepino y salsa",                         "3.50"],
          [36, "Ensalada B&C",        "Lechuga, tomate, maíz, mozzarella y pechuga de pollo",          "5.00"],
          [37, "Ensalada Valenciana", "Lechuga, tomate, maíz, pepino, cebolla, olivas, huevo y atún",  "5.00"],
          [38, "Ensalada España",     "Lechuga, tomate, jamón york, queso, aceitunas y piña",          "5.50"],
        ],
      },
      {
        id: "bebidas", label: "Bebidas",
        items: [
          [39, "Refrescos 33cl",        "Coca-Cola, Cola Light y Zero, Fanta, Aquarius, Sprite, Nestea", "1.40"],
          [40, "Refrescos 2L",          "Coca-Cola, Cola Light y Zero, Fanta, Sprite",                   "2.90"],
          [41, "Agua Pequeña",          "",                                                              "1.00"],
          [42, "Agua Grande 1,5L",      "",                                                              "1.40"],
          [43, "Monster / Red Bull",    "",                                                              "2.50"],
          [44, "Bebidas Energéticas",   "Variedad",                                                      "2.50"],
          [45, "Bebidas Latinas",       "Variedad",                                                      "2.50"],
        ],
      },
    ],
  },
};

/* ============================================================
   State + helpers
   ============================================================ */
const WA_NUMBER = "34682146424";
let cur = localStorage.getItem("bc_lang") || "es";

const S = (k, vars) => {
  let t = STR[cur][k] ?? STR.en[k] ?? k;
  if (vars) Object.entries(vars).forEach(([k2, v]) => (t = t.replace(`{${k2}}`, v)));
  return t;
};
const fmt = (v) => (cur === "es" ? `${String(v).replace(".", ",")}€` : `€${v}`);
const money = (v) => fmt(v.toFixed(2));
const D = () => DATA[cur];
const flatItems = () =>
  D().sections.flatMap((s) =>
    s.items.map(([num, name, desc, prices]) => ({
      num, name, desc, prices, section: s.label, secId: s.id, sizes: s.sizes || null, shortSizes: s.shortSizes || null,
    }))
  );

/* ---------- Item thumbnails ---------- */
const ITEM_PIC = {
  26: "nuggets", 27: "wings", 28: "wings", 29: "samosa", 30: "samosa",
  31: "fries", 32: "fries", 33: "rings", 34: "burger",
  35: "salad", 36: "salad", 37: "salad", 38: "salad",
  39: "cola", 40: "soda", 41: "water", 42: "water", 43: "soda", 44: "soda", 45: "juice",
  52: "falafel", 63: "falafel", 56: "plate", 67: "plate",
};
const itemCat = (secId, n) =>
  ITEM_PIC[n] ||
  (secId === "pizzas" ? "pizza"
    : secId === "kebab-rollo" ? "wrap"
    : secId === "kebab-normal" ? "kebab"
    : secId === "ensaladas" ? "salad" : "soda");

const itemThumb = (secId, num, name) =>
  `<button type="button" class="item-thumb" data-full="${ph(itemCat(secId, num), 640, 440, num)}" data-num="${num}" data-name="${name.replace(/"/g, "&quot;")}" aria-label="Photo">
    <img src="${ph(itemCat(secId, num), 150, 110, num)}" alt="" loading="lazy" onerror="this.closest('.item-thumb').remove()">
  </button>`;

/* ============================================================
   Render
   ============================================================ */
function renderCombos() {
  document.getElementById("comboGrid").innerHTML = D().combos.map((c) => `
    <article class="combo">
      ${c.tag ? `<span class="combo-tag">${S(c.tag)}</span>` : ""}
      <img class="combo-img" src="${IMG.deals[c.n]}" alt="${c.items[0]}" loading="lazy" onerror="this.remove()" />
      <div class="combo-body">
        <h3>${S("deal.h")} ${c.n}</h3>
        <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        <div class="combo-price">${fmt(c.price)} <small>${S("deal.per")}</small></div>
      </div>
    </article>
  `).join("");

  document.getElementById("extrasBar").innerHTML =
    `<span class="extras-title">${S("extras.title")}</span>` +
    D().extras.map((e) => `<span>${e}</span>`).join("");
}

function renderTabs(keepActive = true) {
  const tabs = document.getElementById("menuTabs");
  const panels = document.getElementById("menuPanels");
  const prev = keepActive ? tabs.querySelector(".tab.active")?.dataset.target : null;
  const activeId = prev || D().sections[0].id;

  tabs.innerHTML = D().sections.map((s) =>
    `<button class="tab${s.id === activeId ? " active" : ""}" role="tab" id="tab-${s.id}" data-target="${s.id}"
       aria-controls="panel-${s.id}" aria-selected="${s.id === activeId}" tabindex="${s.id === activeId ? 0 : -1}">${s.label}</button>`
  ).join("");

  panels.innerHTML = D().sections.map((s) => {
    const multi = s.sizes && s.sizes.length > 1;
    const head = multi
      ? `<div class="menu-cols-head"><span>${S("cols.head")}</span>
           <span class="sizes">${s.shortSizes.map((x) => `<span>${x}</span>`).join("")}</span></div>`
      : "";
    const rows = s.items.map(([num, name, desc, prices]) => {
      const arr = Array.isArray(prices) ? prices : [prices];
      const tags = arr.map((p, j) =>
        `<span class="price-tag${j === arr.length - 1 && multi ? " hot" : ""}" data-size="${multi ? s.shortSizes[j] : ""}">${fmt(p)}</span>`
      ).join("");
      return `<div class="menu-row${multi ? "" : " single"}">
        <div class="menu-item">
          <span class="menu-num">${num}</span>
          ${itemThumb(s.id, num, name)}
          <div>
            <div class="menu-name">${name}</div>
            ${desc ? `<div class="menu-desc">${desc}</div>` : ""}
          </div>
        </div>
        <div class="menu-prices">${tags}</div>
      </div>`;
    }).join("");

    return `<div class="panel${s.id === activeId ? " active" : ""}" id="panel-${s.id}" role="tabpanel" aria-labelledby="tab-${s.id}">
      <h3 class="panel-title">${s.label}</h3>
      <img class="panel-img" src="${IMG.sections[s.id]}" alt="${s.label}" loading="lazy" onerror="this.remove()" />
      <div class="menu-list">${head}${rows}</div>
      ${s.note ? `<p class="panel-note">${s.note}</p>` : ""}
    </div>`;
  }).join("") + `<div class="panel" id="panel-search" role="tabpanel"><div id="searchResults"></div></div>`;

  const activate = (btn) => {
    const si = document.getElementById("menuSearch");
    if (si) si.value = "";
    tabs.querySelectorAll(".tab").forEach((t) => {
      const on = t === btn;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    panels.querySelectorAll(".panel").forEach((p) =>
      p.classList.toggle("active", p.id === `panel-${btn.dataset.target}`)
    );
  };

  tabs.onclick = (e) => {
    const btn = e.target.closest(".tab");
    if (btn) activate(btn);
  };
  tabs.onkeydown = (e) => {
    const all = [...tabs.querySelectorAll(".tab")];
    const i = all.indexOf(document.activeElement);
    if (i < 0) return;
    const j = e.key === "ArrowRight" ? (i + 1) % all.length
            : e.key === "ArrowLeft" ? (i - 1 + all.length) % all.length
            : null;
    if (j !== null) { e.preventDefault(); all[j].focus(); activate(all[j]); }
  };
}

/* ============================================================
   Online order → WhatsApp
   ============================================================ */
let order = []; // {num, sizeIdx, qty}

function findItem(num) { return flatItems().find((i) => i.num === num); }

function populateItemSelect() {
  const sel = document.getElementById("ordItem");
  sel.innerHTML = D().sections.map((s) =>
    `<optgroup label="${s.label}">` +
    s.items.map(([num, name]) => `<option value="${num}">#${num} · ${name}</option>`).join("") +
    `</optgroup>`
  ).join("");
  updateSizeSelect();
}

function updateSizeSelect() {
  const num = parseInt(document.getElementById("ordItem").value, 10);
  const item = findItem(num);
  const sizeSel = document.getElementById("ordSize");
  if (item && item.sizes) {
    sizeSel.innerHTML = item.sizes.map((sz, i) => `<option value="${i}">${sz}</option>`).join("");
    sizeSel.hidden = false;
  } else {
    sizeSel.innerHTML = "";
    sizeSel.hidden = true;
  }
}

function orderTotal() {
  return order.reduce((sum, o) => {
    const it = findItem(o.num);
    if (!it) return sum;
    const arr = Array.isArray(it.prices) ? it.prices : [it.prices];
    return sum + parseFloat(arr[o.sizeIdx] ?? arr[0]) * o.qty;
  }, 0);
}

function renderOrder() {
  const list = document.getElementById("ordList");
  const warn = document.getElementById("ordWarn");
  const isDelivery = document.querySelector('input[name="ordType"]:checked')?.value === "delivery";
  const total = orderTotal();

  list.innerHTML = order.length
    ? order.map((o, idx) => {
        const it = findItem(o.num);
        if (!it) return "";
        const arr = Array.isArray(it.prices) ? it.prices : [it.prices];
        const sizeTxt = it.sizes ? ` · ${it.sizes[o.sizeIdx]}` : "";
        const line = parseFloat(arr[o.sizeIdx] ?? arr[0]) * o.qty;
        return `<li>
          <span class="ord-line">${o.qty}× <b>#${o.num}</b> ${it.name}${sizeTxt}</span>
          <span class="ord-line-r">
            <span>${money(line)}</span>
            <button type="button" class="ord-del" data-idx="${idx}" aria-label="Remove">×</button>
          </span>
        </li>`;
      }).join("")
    : `<li class="ord-empty">${S("order.empty")}</li>`;

  document.getElementById("ordTotal").textContent = money(total);
  const belowMin = isDelivery && order.length && total < 10;
  warn.hidden = !belowMin;
  if (belowMin) warn.textContent = S("order.warn");
  updateWaLink();
}

function updateWaLink() {
  const send = document.getElementById("ordSend");
  if (!order.length) { send.href = "#"; return; }
  const name = document.getElementById("ordName").value.trim();
  const addr = document.getElementById("ordAddr").value.trim();
  const note = document.getElementById("ordNote").value.trim();
  const isDelivery = document.querySelector('input[name="ordType"]:checked')?.value === "delivery";

  const lines = [S("msg.title"), ""];
  if (name) lines.push(`${S("msg.name")}: ${name}`);
  lines.push(`${S("msg.type")}: ${S(isDelivery ? "msg.delivery" : "msg.pickup")}`);
  if (isDelivery && addr) lines.push(`${S("msg.addr")}: ${addr}`);
  lines.push("", `${S("msg.items")}:`);
  order.forEach((o) => {
    const it = findItem(o.num);
    if (!it) return;
    const arr = Array.isArray(it.prices) ? it.prices : [it.prices];
    const sizeTxt = it.sizes ? ` (${it.sizes[o.sizeIdx]})` : "";
    lines.push(`• ${o.qty}× #${o.num} ${it.name}${sizeTxt} — ${money(parseFloat(arr[o.sizeIdx] ?? arr[0]) * o.qty)}`);
  });
  lines.push("", `${S("msg.total")}: ${money(orderTotal())}`);
  if (note) lines.push(`${S("msg.note")}: ${note}`);
  send.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function initOrder() {
  populateItemSelect();
  const sel = document.getElementById("ordItem");
  const qty = document.getElementById("ordQty");
  sel.addEventListener("change", updateSizeSelect);

  document.getElementById("ordAdd").addEventListener("click", () => {
    const num = parseInt(sel.value, 10);
    const sizeIdx = parseInt(document.getElementById("ordSize").value || "0", 10);
    const q = Math.max(1, Math.min(20, parseInt(qty.value, 10) || 1));
    const existing = order.find((o) => o.num === num && o.sizeIdx === sizeIdx);
    if (existing) existing.qty = Math.min(99, existing.qty + q);
    else order.push({ num, sizeIdx, qty: q });
    qty.value = 1;
    renderOrder();
  });

  document.getElementById("ordList").addEventListener("click", (e) => {
    const btn = e.target.closest(".ord-del");
    if (!btn) return;
    order.splice(parseInt(btn.dataset.idx, 10), 1);
    renderOrder();
  });

  document.querySelectorAll('input[name="ordType"]').forEach((r) =>
    r.addEventListener("change", () => {
      const isDelivery = document.querySelector('input[name="ordType"]:checked').value === "delivery";
      document.getElementById("ordAddrWrap").style.display = isDelivery ? "" : "none";
      renderOrder();
    })
  );
  ["ordName", "ordAddr", "ordNote"].forEach((id) =>
    document.getElementById(id).addEventListener("input", updateWaLink)
  );
  document.getElementById("ordSend").addEventListener("click", (e) => {
    if (!order.length) e.preventDefault();
  });
  renderOrder();
}

/* ============================================================
   i18n
   ============================================================ */
function applyLang() {
  document.documentElement.lang = cur;
  document.title = S("meta.title");
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.innerHTML = S(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = S(el.dataset.i18nPh)));
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", S(el.dataset.i18nAria)));
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === cur)
  );
  const map = document.getElementById("mapFrame");
  if (map) map.src = `https://www.google.com/maps?q=Calle+Brasil+7+46018+Valencia&output=embed&hl=${cur}`;
  renderCombos();
  renderTabs();
  const si = document.getElementById("menuSearch");
  if (si) { si.value = ""; }
  populateItemSelect();
  renderOrder();
  updateOpenStatus();
}

function initLangSwitch() {
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.lang === cur) return;
      cur = b.dataset.lang;
      localStorage.setItem("bc_lang", cur);
      applyLang();
    })
  );
}

/* ============================================================
   Interactions
   ============================================================ */
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
  ["menus", "carta", "order", "info"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

function initPopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  if (localStorage.getItem("bc_popup_hide") || sessionStorage.getItem("bc_popup_seen")) return;
  const close = () => {
    if (document.getElementById("popupNever").checked) localStorage.setItem("bc_popup_hide", "1");
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

function initSearch() {
  const input = document.getElementById("menuSearch");
  if (!input) return;
  const tabs = document.getElementById("menuTabs");
  const panels = document.getElementById("menuPanels");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    const searchPanel = document.getElementById("panel-search");
    const results = document.getElementById("searchResults");
    if (q.length < 2) {
      searchPanel.classList.remove("active");
      const activeTab = tabs.querySelector(".tab.active");
      if (activeTab) document.getElementById(`panel-${activeTab.dataset.target}`).classList.add("active");
      return;
    }
    const hits = flatItems().filter((it) =>
      `${it.num} ${it.name} ${it.desc} ${it.section}`.toLowerCase().includes(q)
    );
    panels.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    results.innerHTML = hits.length
      ? `<p class="search-meta">${S("search.results", { n: hits.length, s: hits.length === 1 ? "" : "s", q: input.value.trim() })}</p>
         <div class="menu-list">${hits.map((it) => {
            const arr = Array.isArray(it.prices) ? it.prices : [it.prices];
            const tags = arr.map((p, j) =>
              `<span class="price-tag" data-size="${it.shortSizes ? it.shortSizes[j] : ""}">${fmt(p)}</span>`).join("");
            return `<div class="menu-row${it.sizes ? "" : " single"}">
              <div class="menu-item"><span class="menu-num">${it.num}</span>${itemThumb(it.secId, it.num, it.name)}
                <div><div class="menu-name">${it.name}<span class="search-section">${it.section}</span></div>
                ${it.desc ? `<div class="menu-desc">${it.desc}</div>` : ""}</div></div>
              <div class="menu-prices">${tags}</div></div>`;
          }).join("")}</div>`
      : `<div class="menu-list"><p class="search-empty">${S("search.empty", { q: input.value.trim() })}</p></div>`;
    searchPanel.classList.add("active");
  });
}

function updateOpenStatus() {
  const els = document.querySelectorAll(".js-open-status");
  if (!els.length) return;
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const openMin = day === 1 ? 18 * 60 : 12 * 60 + 30;
  const isOpen = mins >= openMin;
  const text = isOpen ? S("status.open") : S("status.closed", { t: day === 1 ? "18:00" : "12:30" });
  els.forEach((el) => {
    el.classList.toggle("is-open", isOpen);
    el.classList.toggle("is-closed", !isOpen);
    el.innerHTML = `<span class="status-dot"></span>${text}`;
  });
}

function initOpenStatus() {
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
}

function initToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 600), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initPrint() {
  const btn = document.getElementById("printMenu");
  if (btn) btn.addEventListener("click", () => window.print());
}

function initLightbox() {
  const lb = document.getElementById("lb");
  if (!lb) return;
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCap");
  const close = () => lb.classList.remove("show");
  lb.addEventListener("click", (e) => { if (e.target !== img) close(); });
  document.getElementById("lbClose").addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  document.getElementById("menuPanels").addEventListener("click", (e) => {
    const b = e.target.closest(".item-thumb");
    if (!b) return;
    img.src = b.dataset.full;
    img.alt = b.dataset.name;
    cap.textContent = `#${b.dataset.num} · ${b.dataset.name}`;
    lb.classList.add("show");
  });
}

/* ---------- Boot ---------- */
applyLang();
initLangSwitch();
initOrder();
initNav();
initReveal();
initScrollSpy();
initPopup();
initSearch();
initOpenStatus();
initToTop();
initPrint();
initLightbox();
document.getElementById("year").textContent = new Date().getFullYear();

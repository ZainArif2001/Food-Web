const API = "../api";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const toast = (msg, ok = true) => {
  const t = $("#toast");
  t.textContent = msg;
  t.className = `toast ${ok ? "ok" : "bad"}`;
  t.hidden = false;
  setTimeout(() => (t.hidden = true), 2200);
};

const api = async (path, opts = {}) => {
  const r = await fetch(`${API}/${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (r.status === 401) { showLogin(); throw new Error("401"); }
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || "error");
  return j;
};

/* ---------- auth ---------- */
function showLogin() {
  $("#loginView").hidden = false;
  $("#adminView").hidden = true;
  $("#logoutBtn").hidden = true;
}
function showAdmin() {
  $("#loginView").hidden = true;
  $("#adminView").hidden = false;
  $("#logoutBtn").hidden = false;
  loadSections();
  loadDeals();
  loadOrders();
}

$("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  $("#loginErr").hidden = true;
  try {
    await api("auth.php", {
      method: "POST",
      body: JSON.stringify({ username: $("#loginUser").value, password: $("#loginPass").value }),
    });
    showAdmin();
  } catch {
    $("#loginErr").hidden = false;
  }
});

$("#logoutBtn").addEventListener("click", async () => {
  await api("auth.php", { method: "DELETE" });
  showLogin();
});

/* ---------- tabs ---------- */
$$(".atab").forEach((b) =>
  b.addEventListener("click", () => {
    $$(".atab").forEach((x) => x.classList.toggle("active", x === b));
    $$(".apane").forEach((p) => (p.hidden = p.id !== `tab-${b.dataset.tab}`));
  })
);

/* ---------- items ---------- */
async function loadSections() {
  const menu = await (await fetch(`${API}/menu.php`)).json();
  $("#itemSection").innerHTML = menu.en.sections
    .map((s) => `<option value="${s.id}">${s.label}</option>`).join("");
  loadItems();
}
$("#itemSection").addEventListener("change", loadItems);

async function loadItems() {
  const { items } = await api(`admin/items.php?section=${$("#itemSection").value}`);
  $("#itemsHint").textContent = `${items.length} items · har row ka Save alag hai`;
  $("#itemSearch").value = "";
  $("#itemsList").innerHTML = items.map((it) => {
    const priceInputs = it.prices.map((p, i) => {
      const sz = it.sizes && it.sizes[i] ? `<label>${it.sizes[i].en}</label>` : "";
      return `<label class="pfield">${sz}<input type="text" class="ip-price" value="${p}" /></label>`;
    }).join("");
    return `<div class="irow" data-id="${it.id}">
      <span class="irow-num">#${it.num}</span>
      <div class="irow-grid">
        <label>Name EN<input class="ip" data-f="name_en" value="${esc(it.name_en)}" /></label>
        <label>Name ES<input class="ip" data-f="name_es" value="${esc(it.name_es)}" /></label>
        <label>Desc EN<input class="ip" data-f="desc_en" value="${esc(it.desc_en)}" /></label>
        <label>Desc ES<input class="ip" data-f="desc_es" value="${esc(it.desc_es)}" /></label>
        <div class="iprices">${priceInputs}</div>
      </div>
      <button class="btn-primary btn-save">Save</button>
    </div>`;
  }).join("");
}

$("#itemSearch").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  $$(".irow", $("#itemsList")).forEach((row) => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});

$("#itemsList").addEventListener("click", async (e) => {
  const btn = e.target.closest(".btn-save");
  if (!btn) return;
  const row = btn.closest(".irow");
  const payload = { id: row.dataset.id, prices: $$(".ip-price", row).map((i) => i.value) };
  $$(".ip", row).forEach((i) => (payload[i.dataset.f] = i.value));
  try {
    await api("admin/items.php", { method: "POST", body: JSON.stringify(payload) });
    toast("Saved ✓");
  } catch { toast("Save failed", false); }
});

/* ---------- deals ---------- */
async function loadDeals() {
  const { deals } = await api("admin/deals.php");
  $("#dealsList").innerHTML = deals.map((d) => `
    <div class="drow" data-id="${d.id}">
      <div class="drow-head"><strong>Deal ${d.num}</strong>
        <label>Price €<input class="d-price" value="${Number(d.price).toFixed(2)}" /></label>
        <button class="btn-primary btn-save">Save</button>
      </div>
      <div class="drow-grid">
        <label>Items EN (one per line)<textarea class="d-en" rows="4">${d.items_en.join("\n")}</textarea></label>
        <label>Items ES (one per line)<textarea class="d-es" rows="4">${d.items_es.join("\n")}</textarea></label>
      </div>
      <label class="d-imgl">Image URL/keyword<input class="d-img" value="${esc(d.img || "")}" /></label>
    </div>`).join("");
}

$("#dealsList").addEventListener("click", async (e) => {
  const btn = e.target.closest(".btn-save");
  if (!btn) return;
  const row = btn.closest(".drow");
  try {
    await api("admin/deals.php", {
      method: "POST",
      body: JSON.stringify({
        id: row.dataset.id,
        price: $(".d-price", row).value,
        items_en: $(".d-en", row).value.split("\n"),
        items_es: $(".d-es", row).value.split("\n"),
        img: $(".d-img", row).value,
      }),
    });
    toast("Saved ✓");
  } catch { toast("Save failed", false); }
});

/* ---------- orders ---------- */
const STATUS = ["new", "preparing", "done", "cancelled"];

async function loadOrders() {
  const { orders } = await api("admin/orders.php");
  $("#newCount").hidden = !orders.filter((o) => o.status === "new").length;
  $("#newCount").textContent = orders.filter((o) => o.status === "new").length;

  const count = (s) => orders.filter((o) => o.status === s).length;
  const todayRevenue = orders
    .filter((o) => o.status !== "cancelled" && o.created_at?.startsWith(new Date().toISOString().slice(0, 10)))
    .reduce((s, o) => s + parseFloat(o.total), 0);
  $("#orderStats").innerHTML = [
    ["New", count("new"), "amber"],
    ["Preparing", count("preparing"), "blue"],
    ["Done", count("done"), "green"],
    ["Today €", todayRevenue.toFixed(2), "ink"],
  ].map(([l, v, c]) => `<div class="stat stat-${c}"><strong>${v}</strong><span>${l}</span></div>`).join("");

  $("#ordersList").innerHTML = orders.length ? orders.map((o) => `
    <div class="orow st-${o.status}" data-id="${o.id}">
      <div class="orow-head">
        <strong>#${o.id}</strong>
        <span class="muted">${o.created_at}</span>
        <select class="o-status">
          ${STATUS.map((s) => `<option ${s === o.status ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </div>
      <div class="orow-meta">
        <b>${esc(o.customer_name || "—")}</b>
        <span>${o.type === "delivery" ? "🛵 Delivery" : "🥡 Pickup"}</span>
        ${o.address ? `<span>${esc(o.address)}</span>` : ""}
        ${o.phone ? `<span>${esc(o.phone)}</span>` : ""}
      </div>
      <ul class="orow-items">
        ${o.items.map((i) => `<li>${i.qty}× #${i.item_num} ${esc(i.item_name)}${i.size_label ? ` (${esc(i.size_label)})` : ""} — €${i.unit_price}</li>`).join("")}
      </ul>
      ${o.note ? `<p class="orow-note">Note: ${esc(o.note)}</p>` : ""}
      <div class="orow-total">Total: <b>€${o.total}</b></div>
    </div>`).join("")
  : `<p class="muted" style="padding:2rem;text-align:center">No orders yet.</p>`;
}

$("#ordersList").addEventListener("change", async (e) => {
  const sel = e.target.closest(".o-status");
  if (!sel) return;
  const row = sel.closest(".orow");
  try {
    await api("admin/orders.php", {
      method: "POST",
      body: JSON.stringify({ id: row.dataset.id, status: sel.value }),
    });
    row.className = `orow st-${sel.value}`;
    toast("Status updated ✓");
  } catch { toast("Update failed", false); }
});

$("#refreshOrders").addEventListener("click", loadOrders);
setInterval(() => { if (!$("#tab-orders").hidden && !$("#adminView").hidden) loadOrders(); }, 30000);

function esc(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

/* ---------- boot ---------- */
(async () => {
  try {
    const { logged } = await api("auth.php");
    logged ? showAdmin() : showLogin();
  } catch { showLogin(); }
})();

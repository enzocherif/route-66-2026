/* =========================================================
   ROUTE 66 — rendering & interactivity
   ========================================================= */

function iconFor(type){
  return { drive:"🚗", activity:"📍", hike:"🥾", sleep:"🛏️" }[type] || "•";
}

function renderRoadNav(){
  const track = document.getElementById("roadTrack");
  track.innerHTML = `<div class="road-line"></div>` + DAYS.map((d,i) => `
    <button class="mile" data-day="${d.id}" aria-label="Jour ${d.id} — ${d.title}">
      ${ (d.alert && d.alert.tone==='rust') ? `<span class="badge">!</span>` : "" }
      <div class="pin"></div>
      <div class="d">${d.date}</div>
      <div class="t">${d.title.length > 22 ? d.title.slice(0,20)+"…" : d.title}</div>
    </button>
  `).join("");
}

function renderDayPanels(){
  const main = document.getElementById("dayPanels");
  main.innerHTML = DAYS.map(d => `
    <section class="day-panel" id="day-${d.id}" data-day="${d.id}">
      <div class="day-head">
        <div>
          <div class="num">JOUR ${String(d.id).padStart(2,"0")} · ${d.weekday} ${d.date}</div>
          <h2>${d.title}</h2>
          <div class="region">${d.region}</div>
        </div>
        <div class="head-cards">
          <div class="wake-card ${d.wakeType || ''}">
            <div class="k">Réveil conseillé</div>
            <div class="v">${d.wake}</div>
          </div>
          <div class="meal-card ${d.breakfast && !d.breakfast.included ? 'no' : ''}">
            <div class="k">Petit-déj</div>
            <div class="v">${d.breakfast ? (d.breakfast.included ? "☕ Inclus" : "❌ Non inclus") : "—"}</div>
          </div>
        </div>
      </div>

      ${ d.breakfast ? `
      <div class="wake-note ${d.breakfast.included ? '' : 'calc'}">
        <span class="wn-ic">${d.breakfast.included ? '☕' : '⚠️'}</span>
        <span>${d.breakfast.note}</span>
      </div>` : "" }

      ${ d.wakeReason ? `
      <div class="wake-note ${d.wakeType === 'free' ? '' : 'calc'}">
        <span class="wn-ic">${d.wakeType === 'free' ? '😴' : (d.wakeType === 'flight' ? '✈️' : '⏱️')}</span>
        <span>${d.wakeReason}</span>
      </div>` : "" }

      <img class="day-photo" src="${d.photo}" alt="${d.title}" loading="lazy"
        onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${encodeURIComponent(fallbackSvg(d.title))}';">
      <div class="day-photo-cap">${d.photoCap || ""}</div>

      ${ d.alert ? `
      <div class="alert ${d.alert.tone === 'mustard' ? 'mustard' : ''}">
        <div class="ic">${d.alert.tone === 'rust' ? '⚠️' : '⏰'}</div>
        <div><b>${d.alert.title}</b>${d.alert.text}</div>
      </div>` : "" }

      <div class="grid2">
        <div>
          <div class="card">
            <h3>Déroulé de la journée</h3>
            <ul class="timeline">
              ${d.timeline.map(t => `
                <li class="type-${t.type}">
                  <div class="tl-top">
                    <span class="tl-label">${iconFor(t.type)} ${t.label}</span>
                    ${ t.dur ? `<span class="tl-dur">${t.dur}</span>` : "" }
                  </div>
                  ${ t.desc ? `<div class="tl-desc">${t.desc}</div>` : "" }
                  ${ t.link ? `<a class="tl-link" href="${t.link}" target="_blank" rel="noopener">${t.linkText || "Ouvrir dans Google Maps"} →</a>` : "" }
                  ${ t.anchor ? `<a class="tl-link" href="${t.anchor}">${t.linkText} →</a>` : "" }
                </li>`).join("")}
            </ul>
          </div>
        </div>

        <div>
          ${ d.hotel ? `
          <div class="card hotel-card">
            <div class="pin">🛏</div>
            <div>
              <div class="hotel-name">${d.hotel.name}</div>
              <div class="hotel-meta">${d.hotel.price || ""}</div>
              ${ d.hotel.link ? `<a class="btn small" href="${d.hotel.link}" target="_blank" rel="noopener">Voir la réservation</a>` : `<span class="status-pill done">Réservé</span>` }
              ${ d.hotel.map ? ` <a class="btn small outline" href="${d.hotel.map}" target="_blank" rel="noopener">Voir sur la carte</a>` : "" }
            </div>
          </div>` : "" }

          ${ d.highlight ? `
          <div class="card">
            <h3>🗺️ Fiche : ${d.highlight.name}</h3>
            <span class="diff ${d.highlight.difficulty}">${d.highlight.diffLabel}</span>
            <div class="fiche-stats">
              <div class="fiche-stat"><div class="k">Distance</div><div class="v">${d.highlight.distance}</div></div>
              <div class="fiche-stat"><div class="k">Durée</div><div class="v">${d.highlight.duration}</div></div>
            </div>
            <div class="fiche-stat" style="margin-bottom:10px;"><div class="k">💧 Eau</div><div class="v" style="font-weight:500;">${d.highlight.water}</div></div>
            <div class="fiche-stat" style="margin-bottom:10px;"><div class="k">🎒 Équipement</div><div class="v" style="font-weight:500;">${d.highlight.gear}</div></div>
            <div class="fiche-stat" style="margin-bottom:12px;"><div class="k">📅 Réservation</div><div class="v" style="font-weight:500;">${d.highlight.reservation}</div></div>
            <h3 style="font-size:15px;margin-bottom:6px;">À savoir</h3>
            <ul class="tip-list">${d.highlight.tips.map(t=>`<li>${t}</li>`).join("")}</ul>
          </div>` : "" }
        </div>
      </div>
    </section>
  `).join("");
}

function fallbackSvg(title){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300"><rect width="800" height="300" fill="#e9dfc4"/><text x="400" y="155" font-family="Georgia" font-size="26" fill="#9c360a" text-anchor="middle">${title}</text></svg>`;
}

function selectDay(id){
  document.querySelectorAll(".day-panel").forEach(p => p.classList.toggle("active", p.dataset.day == id));
  document.querySelectorAll(".mile").forEach(m => m.classList.toggle("active", m.dataset.day == id));
  const activeMile = document.querySelector(`.mile[data-day="${id}"]`);
  if(activeMile) activeMile.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" });
  localStorage.setItem("r66_lastDay", id);
}

function initRoadNav(){
  document.getElementById("roadTrack").addEventListener("click", (e) => {
    const btn = e.target.closest(".mile");
    if(!btn) return;
    document.getElementById("mainNavTab").click();
    selectDay(btn.dataset.day);
    document.getElementById("dayPanels").scrollIntoView({ behavior:"smooth", block:"start" });
  });
}

/* ---------------- Reservations table ---------------- */
function renderReservations(){
  const tbody = document.getElementById("resBody");
  tbody.innerHTML = RESERVATIONS.map((r,i) => `
    <tr class="${r.urgent ? 'urgent' : ''}">
      <td><input type="checkbox" class="check" data-idx="${i}" ${r.done ? "checked":""}></td>
      <td>${r.date}</td>
      <td>${r.label}${r.link ? ` — <a class="tl-link" href="${r.link}" target="_blank" rel="noopener">lien</a>` : ""}</td>
      <td>${r.price}</td>
      <td>${r.done ? `<span class="status-pill done">Réservé</span>` : `<span class="status-pill todo">À réserver</span>`}</td>
    </tr>`).join("");

  const saved = JSON.parse(localStorage.getItem("r66_res") || "{}");
  document.querySelectorAll("#resBody .check").forEach(cb => {
    const idx = cb.dataset.idx;
    if(saved[idx] !== undefined) cb.checked = saved[idx];
    cb.addEventListener("change", () => {
      const state = JSON.parse(localStorage.getItem("r66_res") || "{}");
      state[idx] = cb.checked;
      localStorage.setItem("r66_res", JSON.stringify(state));
      cb.closest("tr").querySelector(".status-pill").outerHTML = cb.checked
        ? `<span class="status-pill done">Réservé</span>` : `<span class="status-pill todo">À réserver</span>`;
    });
  });
}

/* ---------------- Shopping list ---------------- */
function renderShopping(){
  const grid = document.getElementById("shopGrid");
  const saved = JSON.parse(localStorage.getItem("r66_shop") || "{}");
  grid.innerHTML = SHOPPING.map((cat, ci) => `
    <div class="shop-cat">
      <h4>${cat.cat}</h4>
      <ul>
        ${cat.items.map((it,ii) => {
          const key = `${ci}-${ii}`;
          const checked = saved[key] ? "checked" : "";
          return `<li class="${saved[key] ? 'checked':''}" data-key="${key}">
            <input type="checkbox" class="check" id="sh-${key}" ${checked}>
            <label for="sh-${key}">${it}</label>
          </li>`;
        }).join("")}
      </ul>
    </div>`).join("");

  grid.querySelectorAll(".check").forEach(cb => {
    cb.addEventListener("change", () => {
      const li = cb.closest("li");
      const key = li.dataset.key;
      const state = JSON.parse(localStorage.getItem("r66_shop") || "{}");
      state[key] = cb.checked;
      localStorage.setItem("r66_shop", JSON.stringify(state));
      li.classList.toggle("checked", cb.checked);
      updateShopProgress();
    });
  });
  updateShopProgress();
}
function updateShopProgress(){
  const total = SHOPPING.reduce((a,c)=>a+c.items.length,0);
  const checked = document.querySelectorAll("#shopGrid .check:checked").length;
  document.getElementById("shopProgress").textContent = `${checked} / ${total} articles cochés`;
}

/* ---------------- Budget ---------------- */
function renderBudget(){
  document.getElementById("budgetTotal").textContent = BUDGET_TOTAL.toLocaleString("fr-FR", {minimumFractionDigits:2}) + " $";
  const groups = [
    { label:"Vols", match: l => l.toLowerCase().includes("avion") },
    { label:"Location voitures", match: l => l.toLowerCase().includes("location") },
    { label:"Hôtels", match: l => l.toLowerCase().includes("hôtel") },
    { label:"Activités & pass", match: l => true }
  ];
  const used = new Set();
  const totals = groups.map(g => {
    let sum = 0;
    RESERVATIONS.forEach((r, i) => {
      if(used.has(i)) return;
      const num = parseFloat((r.price||"").replace(/[^\d.,]/g,"").replace(",", "."));
      if(g.match(r.label) && !isNaN(num)){ sum += num; used.add(i); }
    });
    return { label: g.label, sum };
  });
  const max = Math.max(...totals.map(t=>t.sum), 1);
  document.getElementById("budgetBars").innerHTML = totals.map(t => `
    <div class="bbar-row">
      <div>${t.label}</div>
      <div class="bbar-track"><div class="bbar-fill" style="width:${(t.sum/max*100).toFixed(0)}%"></div></div>
      <div>${t.sum.toFixed(0)} $</div>
    </div>`).join("");
}

/* ---------------- Quicknav active state ---------------- */
function initQuicknav(){
  const links = document.querySelectorAll(".quicknav a");
  const secs = [...links].map(l => document.querySelector(l.getAttribute("href")));
  window.addEventListener("scroll", () => {
    let current = secs[0];
    secs.forEach(s => { if(s && window.scrollY >= s.offsetTop - 140) current = s; });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current?.id));
  });
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderRoadNav();
  renderDayPanels();
  initRoadNav();
  renderReservations();
  renderShopping();
  renderBudget();
  initQuicknav();

  const last = localStorage.getItem("r66_lastDay") || 1;
  selectDay(last);

  document.getElementById("resetProgress").addEventListener("click", () => {
    if(confirm("Réinitialiser les cases cochées (réservations + liste de courses) ?")){
      localStorage.removeItem("r66_res");
      localStorage.removeItem("r66_shop");
      renderReservations();
      renderShopping();
    }
  });
});

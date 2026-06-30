/* ============================================================
   C GARDEN — Drinks menu data + interactions
   ── Бүх агуулгыг ЭНД засна. Edit ALL content HERE.
      p  = үнэ (зөвхөн тоо, ₮ автоматаар)
      p2 = хоёр дахь үнэ (жнь: хундага / лонх)
      note = жижиг тайлбар (хэмжээ г.м.)
      img  = зураг зам (заавал биш) — жнь "assets/ginx.jpg"
   ============================================================ */

const MENU = [
  {
    id: "beer",
    title: { mn: "Шар айраг", en: "Beer" },
    groups: [
      { label: { mn: "Савнаас", en: "Draft" }, meta: { mn: "0.5Л", en: "0.5L" }, items: [
        { n: "Сэнгүр", p: 15000 },
        { n: "Super Lite", p: 15000 },
        { n: "Altan Gobi", p: 16000 },
      ]},
      { label: { mn: "Лааз", en: "Canned" }, meta: { mn: "0.5Л", en: "0.5L" }, items: [
        { n: "Kaltenberg", p: 18000 },
        { n: "Altan Gobi", p: 16000 },
        { n: "Heineken", p: 15000 },
        { n: "Сэнгүр", p: 12000 },
      ]},
      { label: { mn: "Лонх", en: "Bottled" }, meta: { mn: "0.33Л", en: "0.33L" }, items: [
        { n: "Heineken", p: 12000 },
        { n: "Asahi", p: 16000 },
      ]},
    ],
  },
  {
    id: "soft",
    title: { mn: "Зөөлөн ундаа", en: "Soft Drinks" },
    groups: [
      { label: { mn: "Ундаа", en: "Drinks" }, items: [
        { n: "Cola", p: 7500 },
        { n: "Sprite", p: 7500 },
      ]},
      { label: { mn: "Рашаан", en: "Mineral" }, meta: { mn: "0.33 лааз", en: "0.33 Can" }, items: [
        { n: "Terelj", p: 7000 },
        { n: "Selenge", p: 7000 },
      ]},
      { label: { mn: "Ус ба жүүс", en: "Water & Juice" }, items: [
        { n: "Bonaqua", p: 5000 },
        { n: "Frutta", note: "1L", p: 14000 },
        { n: "Frutta", note: "0.25L", p: 7500 },
      ]},
    ],
  },
  {
    id: "grill",
    title: { mn: "Грилл", en: "Grill" },
    groups: [
      { label: { mn: "Шорлог", en: "Skewers" }, items: [
        { n: { mn: "Үхэр", en: "Beef" }, p: 40000 },
        { n: { mn: "Хонь", en: "Lamb" }, p: 36000 },
        { n: { mn: "Тахиа", en: "Chicken" }, p: 30000 },
      ]},
      { label: { mn: "Хоол", en: "Plates" }, items: [
        { n: { mn: "Үхрийн махан бургер", en: "Beef Burger" }, p: 28000 },
        { n: { mn: "Зайдасны цуглуулга", en: "Sausage Platter" }, p: 120000 },
        { n: { mn: "Шарсан төмс", en: "Fries" }, p: 15000 },
        { n: { mn: "Зайдастай төмс", en: "Fries with Sausage" }, p: 21000 },
      ]},
    ],
  },
];

/* ---------- render ---------- */
const num = n => n.toLocaleString("en-US");
const price = it => it.p2 ? `${num(it.p)} / ${num(it.p2)}₮` : `${num(it.p)}₮`;

function render(){
  const lang = document.body.dataset.lang;
  const pills = document.getElementById("pills");
  const main = document.getElementById("menu");
  pills.innerHTML = "";
  main.innerHTML = "";

  MENU.forEach((cat, i) => {
    const a = document.createElement("a");
    a.href = "#" + cat.id;
    a.className = "pill" + (i === 0 ? " active" : "");
    a.dataset.target = cat.id;
    a.textContent = cat.title[lang];
    pills.appendChild(a);

    const sec = document.createElement("section");
    sec.className = "cat fade-up";
    sec.id = cat.id;
    const catMeta = cat.meta ? `<span class="cat-meta">${cat.meta[lang]}</span>` : "";
    const catNote = cat.note ? `<p class="cat-note">${cat.note[lang]}</p>` : "";
    sec.innerHTML = `<div class="cat-head"><h2>${cat.title[lang]}</h2>${catMeta}</div>${catNote}`;

    cat.groups.forEach(g => {
      const grp = document.createElement("div");
      grp.className = "group" + (g.total != null ? " set" : "");
      const gmeta = g.meta ? `<span class="gmeta">${g.meta[lang]}</span>` : "";
      const gtotal = g.total != null ? `<span class="set-price">${num(g.total)}₮</span>` : "";
      let rows = "";
      g.items.forEach(it => {
        const nm = typeof it.n === "string" ? it.n : it.n[lang];
        const noteTxt = it.note ? (typeof it.note === "string" ? it.note : it.note[lang]) : "";
        const note = noteTxt ? ` <span class="note">${noteTxt}</span>` : "";
        const thumb = it.img ? `<img class="thumb" src="${it.img}" alt="${nm}" loading="lazy">` : "";
        const right = it.p != null ? price(it)
                    : (it.qty != null ? `<span class="qty">×${it.qty}</span>` : "");
        rows += `
          <div class="item${it.img ? " has-img" : ""}">
            ${thumb}
            <div class="info"><span class="name">${nm}</span>${note}</div>
            <div class="price">${right}</div>
          </div>`;
      });
      const foot = g.foot ? `<p class="set-foot">${g.foot[lang]}</p>` : "";
      grp.innerHTML = `<div class="group-head"><span class="glabel">${g.label[lang]}</span>${gmeta}${gtotal}</div><div class="items">${rows}</div>${foot}`;
      sec.appendChild(grp);
    });
    main.appendChild(sec);
  });

  initObservers();
}

/* ---------- scroll spy + reveal ---------- */
function initObservers(){
  const pills = [...document.querySelectorAll(".pill")];
  const secs = [...document.querySelectorAll(".cat")];

  if (!("IntersectionObserver" in window)){
    secs.forEach(s => s.classList.add("show"));
    return;
  }

  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        pills.forEach(p => p.classList.toggle("active", p.dataset.target === e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  secs.forEach(s => spy.observe(s));

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("show"); reveal.unobserve(e.target); } });
  }, { threshold: .05 });
  secs.forEach(s => reveal.observe(s));
}

/* ---------- language toggle ---------- */
function setLang(lang){
  document.body.dataset.lang = lang;
  localStorage.setItem("cgarden-lang", lang);
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === lang));
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("cgarden-lang") || "mn";
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang(saved);
});

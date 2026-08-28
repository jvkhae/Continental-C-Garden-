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
    id: "cocktails",
    title: { mn: "Коктейль", en: "Cocktails" },
    groups: [
      { label: { mn: "Барменийн онцлох", en: "Bartender's Special" }, items: [
        { n: "GinX", p: 40000 },
      ]},
      { label: { mn: "Сонгодог коктейль", en: "Classic Cocktails" }, items: [
        { n: "Whiskey Highball", p: 35000 },
        { n: "Blue Gin & Tonic", p: 35000 },
        { n: "Negroni", p: 35000 },
        { n: "Aperol Spritz", p: 35000 },
      ]},
      { label: { mn: "Лимонад & Айстай цай", en: "Lemonades & Iced Tea" }, items: [
        { n: "Kiwi Lemonade", p: 18000 },
        { n: "Strawberry Lemonade", p: 18000 },
        { n: "Yuzu Lemonade", p: 18000 },
        { n: "Peach Iced Tea", p: 18000 },
      ]},
    ],
  },
  {
    id: "beer",
    title: { mn: "Шар айраг", en: "Beer" },
    groups: [
      { label: { mn: "Савнаас", en: "Draft" }, meta: { mn: "0.5Л", en: "0.5L" }, items: [
        { n: "Сэнгүр", p: 15000 },
        { n: "Super Lite", p: 15000 },
        { n: "Altan Gobi", p: 16000 },
        { n: "Heineken", p: 16500 },
      ]},
      { label: { mn: "Лааз", en: "Canned" }, meta: { mn: "0.5Л", en: "0.5L" }, items: [
        { n: "Kaltenberg", p: 18000 },
        { n: "Altan Gobi", p: 16000 },
        { n: "Heineken", p: 15000 },
        { n: "Сэнгүр", p: 12000 },
      ]},
      { label: { mn: "Лонх", en: "Bottled" }, meta: { mn: "0.33Л", en: "0.33L" }, items: [
        { n: "Heineken", p: 12000 },
      ]},
    ],
  },
  {
    id: "soft",
    title: { mn: "Зөөлөн ундаа", en: "Soft Drinks" },
    groups: [
      { label: { mn: "Ундаа", en: "Drinks" }, meta: { mn: "0.33 лааз", en: "0.33 Can" }, items: [
        { n: "Cola", p: 7500 },
        { n: "Sprite", p: 7500 },
        { n: "Terelj", p: 7000 },
        { n: "Selenge", p: 7000 },
      ]},
      { label: { mn: "Рашаан", en: "Mineral Water" }, items: [
        { n: "Aqua Crystal", p: 5000 },
        { n: "Millenia", p: 7000 },
      ]},
    ],
  },
  {
    id: "snacks",
    title: { mn: "Зууш", en: "Snacks" },
    groups: [
      { label: { mn: "Самар", en: "Sunflower Seeds" }, meta: { mn: "150гр", en: "150g" }, items: [
        { n: { mn: "Давстай", en: "Salted" }, p: 15000 },
        { n: { mn: "Зөгийн балтай", en: "Honey" }, p: 15000 },
      ]},
      { label: { mn: "Doritos", en: "Doritos" }, meta: { mn: "130гр", en: "130g" }, items: [
        { n: "Nacho", p: 20000 },
        { n: "Taco", p: 20000 },
      ]},
      { label: { mn: "Lay's", en: "Lay's" }, meta: { mn: "140гр", en: "140g" }, items: [
        { n: "Paprika", p: 25000 },
        { n: { mn: "Шорлогтой", en: "Shashlik" }, p: 25000 },
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
      { label: { mn: "Пицца", en: "Pizza" }, items: [
        { n: "Margherita", p: 30000 },
        { n: "Meat Lover's", p: 40000 },
      ]},
      { label: { mn: "Хоол", en: "Plates" }, items: [
        { n: { mn: "Үхрийн махан бургер", en: "Beef Burger" }, p: 28000 },
        { n: { mn: "Махан цуглуулга", en: "Meat Platter" }, p: 200000 },
        { n: { mn: "Зайдасны цуглуулга", en: "Sausage Platter" }, p: 120000 },
        { n: { mn: "Шарсан төмс", en: "Fries" }, p: 15000 },
        { n: { mn: "Зайдастай төмс", en: "Fries with Sausage" }, p: 21000 },
      ]},
    ],
  },
  {
    id: "sushi",
    title: { mn: "Суши & Сашими", en: "Sushi & Sashimi" },
    groups: [
      { label: { mn: "Суши", en: "Sushi" }, items: [
        { n: "California roll", p: 30000 },
        { n: "Smoked salmon roll", p: 28000 },
        { n: "Crab roll", p: 25000 },
        { n: "Shiromi roll", p: 25000 },
        { n: { mn: "Суши ролл сэт", en: "Sushi roll set" }, p: 100000 },
      ]},
      { label: { mn: "Сашими", en: "Sashimi" }, items: [
        { n: { mn: "Сашими таваг", en: "Sashimi platter" }, p: 60000 },
      ]},
    ],
  },
];

/* ---------- render ---------- */
const num = n => n.toLocaleString("en-US");
const price = it => it.p2 ? `${num(it.p)} / ${num(it.p2)}₮` : `${num(it.p)}₮`;

/* ---------- Happy Hour · Монголын цагаар (UTC+8) 17:00–20:00 ----------
   Энэ хугацаанд Superlite draft айраг 1+1 болно. Баннер автоматаар
   17:00-д гарч, 20:00 өнгөрөнгүүт алга болно. */
const HH_FROM = 17 * 60, HH_TO = 20 * 60;      // минутаар (17:00–20:00)
function mnMinutes(){ const d = new Date(); return (d.getUTCHours()*60 + d.getUTCMinutes() + 8*60) % 1440; }
function hhActive(){ const m = mnMinutes(); return m >= HH_FROM && m < HH_TO; }
let _hhState = null;

function updateHHbar(lang, on){
  const bar = document.getElementById("hhbar"); if (!bar) return;
  bar.className = "hhbar" + (on ? " on" : "");
  bar.innerHTML = on
    ? (lang==="mn" ? "🍻 <b>HAPPY HOUR</b> · 17:00–20:00 · <b>1+1</b> Superlite draft айраг"
                   : "🍻 <b>HAPPY HOUR</b> · 17:00–20:00 · <b>1+1</b> Superlite draft beer")
    : (lang==="mn" ? "⏰ <b>Happy Hour</b> — өдөр бүр 17:00–20:00 · 1+1 Superlite draft айраг"
                   : "⏰ <b>Happy Hour</b> — daily 17:00–20:00 · 1+1 Superlite draft beer");
}

function render(){
  const lang = document.body.dataset.lang;
  const hhOn = hhActive(); _hhState = hhOn;
  updateHHbar(lang, hhOn);
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
      grp.className = "group" + ((g.set || g.total != null) ? " set" : "");
      const gmeta = g.meta ? `<span class="gmeta">${g.meta[lang]}</span>` : "";
      const gtotal = g.total != null ? `<span class="set-price">${num(g.total)}₮</span>` : "";
      let rows = "";
      g.items.forEach(it => {
        const nm = typeof it.n === "string" ? it.n : it.n[lang];
        const noteTxt = it.note ? (typeof it.note === "string" ? it.note : it.note[lang]) : "";
        const note = noteTxt ? ` <span class="note">${noteTxt}</span>` : "";
        const thumb = it.img ? `<img class="thumb" src="${it.img}" alt="${nm}" loading="lazy">` : "";
        let right = "";
        if (it.p != null){
          if (cat.hh && hhOn && it.p2 == null){
            const d = Math.round(it.p / 2 / 50) * 50;
            right = `<span class="orig">${num(it.p)}₮</span><span class="hhprice">${num(d)}₮</span>`;
          } else right = price(it);
        } else if (it.qty != null){
          right = `<span class="qty">×${it.qty}</span>`;
        }
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
  // Happy Hour эхлэх/дуусах үед автоматаар шинэчилнэ
  setInterval(() => { if (hhActive() !== _hhState) render(); }, 20000);
});

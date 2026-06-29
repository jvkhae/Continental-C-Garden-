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
      { label: { mn: "Барменийн онцлох", en: "Bartender Special" }, items: [
        { n: "GinX", p: 40000 },
        { n: "Ocean Sip", p: 40000 },
      ]},
      { label: { mn: "Сонгодог", en: "Classic" }, items: [
        { n: "Cosmopolitan", p: 35000 },
        { n: "Aperol Spritz", p: 35000 },
        { n: "Negroni", p: 35000 },
        { n: "Blue Gin & Tonic", p: 35000 },
      ]},
    ],
  },
  {
    id: "beer",
    title: { mn: "Шар айраг", en: "Beer" },
    groups: [
      { label: { mn: "Савнаас", en: "Draft" }, meta: { mn: "0.5Л", en: "0.5L" }, items: [
        { n: "Heineken", p: 16500 },
        { n: "Altan Gobi", p: 16000 },
        { n: "Tiger", p: 15000 },
        { n: "Сэнгүр", p: 15000 },
        { n: "Super Lite", p: 15000 },
      ]},
      { label: { mn: "Лонх ба лааз", en: "Bottle & Can" }, items: [
        { n: "Heineken", note: "Can · 0.5L", p: 15000 },
        { n: "Heineken", note: "Bottle · 0.5L", p: 15000 },
        { n: "Heineken", note: "Bottle · 0.33L", p: 12000 },
        { n: "Tiger", note: "Can · 0.5L", p: 15000 },
        { n: "Altan Gobi", note: "Can · 0.33L", p: 12000 },
        { n: "Сэнгүр White", note: "Can · 0.5L", p: 12000 },
        { n: "Сэнгүр Radler", note: "Can · 0.33L", p: 10000 },
        { n: "Kaltenberg", note: "Can · 0.5L", p: 18000 },
      ]},
    ],
  },
  {
    id: "wine",
    title: { mn: "Дарс ба шампанск", en: "Wine & Champagne" },
    groups: [
      { label: { mn: "Хаусын дарс", en: "House Wine" }, meta: { mn: "Хундага / Лонх", en: "Glass / Bottle" }, items: [
        { n: "Maison Castel Merlot", p: 20000, p2: 99000 },
        { n: "Maison Castel Chardonnay", p: 20000, p2: 99000 },
      ]},
      { label: { mn: "Улаан", en: "Red" }, items: [
        { n: "Casillero del Diablo", note: "Cabernet Sauvignon", p: 190000 },
        { n: "Saint Émilion", p: 180000 },
        { n: "Château Méric Ferrande", note: "Red", p: 390000 },
      ]},
      { label: { mn: "Цагаан", en: "White" }, items: [
        { n: "Château Méric Ferrande", note: "White", p: 390000 },
      ]},
      { label: { mn: "Роозе", en: "Rosé" }, items: [
        { n: "Maison Castel Rosé d'Anjou", p: 150000 },
      ]},
      { label: { mn: "Хөөсрөх дарс", en: "Sparkling Wine" }, items: [
        { n: "Cinzano Prosecco", p: 130000 },
      ]},
    ],
  },
  {
    id: "spirits",
    title: { mn: "Хатуу архи", en: "Spirits" },
    meta: { mn: "Лонх · 0.7Л", en: "Bottle · 0.7L" },
    groups: [
      { label: { mn: "Архи (Vodka)", en: "Vodka" }, items: [
        { n: "Evok", p: 155000 },
        { n: "Chinggis Khan", p: 475000 },
        { n: "Soyombo", p: 193000 },
        { n: "Eden", p: 95000 },
      ]},
      { label: { mn: "Жин", en: "Gin" }, items: [
        { n: "Founder", note: "43%", p: 187000 },
        { n: "Bull Dog", note: "0.75L", p: 300000 },
        { n: "Barrister Pink", p: 170000 },
      ]},
      { label: { mn: "Текила", en: "Tequila" }, items: [
        { n: "Espolòn", note: "Blanco / Reposado", p: 350000 },
      ]},
      { label: { mn: "Виски", en: "Whisky" }, items: [
        { n: "Glengrant", note: "12 Y.O", p: 610000 },
        { n: "Wild Turkey", note: "0.75L", p: 320000 },
        { n: "Tenjaku", p: 370000 },
      ]},
      { label: { mn: "Аперитив ба ликёр", en: "Aperitif & Liqueur" }, items: [
        { n: "Aperol", p: 180000 },
        { n: "Jägermeister", p: 230000 },
        { n: "Cinzano", note: "Rosso / Bianco", p: 120000 },
      ]},
      { label: { mn: "Соожу", en: "Soju" }, meta: { mn: "0.38Л", en: "0.38L" }, items: [
        { n: "Soju Original", p: 17000 },
        { n: "Soju Peach", p: 17000 },
        { n: "Soju Yogurt", p: 17000 },
      ]},
    ],
  },
  {
    id: "coffee",
    title: { mn: "Кофе ба цай", en: "Coffee & Tea" },
    groups: [
      { label: { mn: "Кофе", en: "Coffee" }, items: [
        { n: "Single Espresso", note: "30ml", p: 6000 },
        { n: "Double Espresso", note: "60ml", p: 8500 },
        { n: "Americano", note: "250ml", p: 10000 },
        { n: "Latte", note: "300ml", p: 10500 },
        { n: "Vanilla Latte", note: "300ml", p: 11000 },
      ]},
      { label: { mn: "Халуун ундаа", en: "Hot Drinks" }, items: [
        { n: "Earl Grey Tea", p: 14000 },
        { n: "Lemon Water", p: 4000 },
      ]},
      { label: { mn: "Хүйтэн ундаа", en: "Cold Drinks" }, items: [
        { n: "Vanilla Milkshake", p: 16000 },
        { n: "Chocolate Milkshake", p: 16000 },
        { n: "Strawberry Milkshake", p: 16000 },
        { n: "Mango Smoothie", p: 18000 },
        { n: "Orange Banana Smoothie", p: 18000 },
      ]},
      { label: { mn: "Мокктейл", en: "Mocktails" }, items: [
        { n: "Kiwi Lemonade", p: 16000 },
        { n: "Strawberry Lemonade", p: 16000 },
        { n: "Peach Ice Tea", p: 16000 },
      ]},
    ],
  },
  {
    id: "soft",
    title: { mn: "Зөөлөн ундаа", en: "Soft Drinks" },
    groups: [
      { label: { mn: "Оргилуун", en: "Orgiluun" }, meta: { mn: "0.33 лааз", en: "0.33 Can" }, items: [
        { n: "Lemon Lime", p: 5000 },
        { n: "Tropical Fruit", p: 5000 },
        { n: "Strawberry / Watermelon", p: 5000 },
      ]},
      { label: { mn: "Монгол рашаан", en: "Mongolian Mineral" }, meta: { mn: "0.33 лааз", en: "0.33 Can" }, items: [
        { n: "Terelj", p: 7000 },
        { n: "Selenge", p: 7000 },
      ]},
      { label: { mn: "Тоник ба сода", en: "Tonic & Soda" }, meta: { mn: "Оргилуун 0.33", en: "Orgiluun 0.33" }, items: [
        { n: "Tonic / Soda", p: 6000 },
        { n: "Ginger Ale", p: 6000 },
      ]},
      { label: { mn: "Жүүс ба ус", en: "Juice & Water" }, items: [
        { n: "Frutta", note: "1L", p: 14000 },
        { n: "Frutta", note: "0.25L", p: 7500 },
        { n: "Alkaline", note: "0.5L PET", p: 5000 },
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
    sec.innerHTML = `<div class="cat-head"><h2>${cat.title[lang]}</h2>${catMeta}</div>`;

    cat.groups.forEach(g => {
      const grp = document.createElement("div");
      grp.className = "group";
      const gmeta = g.meta ? `<span class="gmeta">${g.meta[lang]}</span>` : "";
      let rows = "";
      g.items.forEach(it => {
        const note = it.note ? ` <span class="note">${it.note}</span>` : "";
        const thumb = it.img ? `<img class="thumb" src="${it.img}" alt="${it.n}" loading="lazy">` : "";
        rows += `
          <div class="item${it.img ? " has-img" : ""}">
            ${thumb}
            <div class="info"><span class="name">${it.n}</span>${note}</div>
            <div class="price">${price(it)}</div>
          </div>`;
      });
      grp.innerHTML = `<div class="group-head"><span class="glabel">${g.label[lang]}</span>${gmeta}</div><div class="items">${rows}</div>`;
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

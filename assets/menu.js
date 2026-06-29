/* ============================================================
   DAZZLE LOUNGE — menu data + interactions
   ── Бүх меню агуулгыг ЭНД засна. Edit ALL menu content HERE.
      price талбарт зөвхөн тоо бичнэ (₮ автоматаар нэмэгдэнэ).
   ============================================================ */

const MENU = [
  {
    id: "cocktails",
    kicker: { mn: "Онцлох", en: "Signature" },
    title:  { mn: "Коктейль ба архи", en: "Cocktails & Spirits" },
    note:   { mn: "Барменийн онцгой жор", en: "Hand-crafted by our bar" },
    items: [
      { name:{mn:"Эмералд Мартини", en:"Emerald Martini"}, desc:{mn:"Жин, базилик, шохойн дусал", en:"Gin, basil, a squeeze of lime"}, price:28000, badge:{mn:"Онц", en:"Signature"} },
      { name:{mn:"Дазл Олд Фэшнд", en:"Dazzle Old Fashioned"}, desc:{mn:"Бурбон, агавын сироп, шатаасан хальс", en:"Bourbon, agave, charred orange"}, price:30000 },
      { name:{mn:"Веловет Негрони", en:"Velvet Negroni"}, desc:{mn:"Жин, кампари, улаан вермут", en:"Gin, Campari, sweet vermouth"}, price:27000 },
      { name:{mn:"Смоки Маргарита", en:"Smoky Margarita"}, desc:{mn:"Мескаль, текила, шохой, давс", en:"Mezcal, tequila, lime, salt rim"}, price:26000 },
      { name:{mn:"Виски (нэг шот)", en:"Whisky (single)"}, desc:{mn:"Single malt — сонголтоор", en:"Single malt — by selection"}, price:18000 },
      { name:{mn:"Премиум водка", en:"Premium Vodka"}, desc:{mn:"40мл", en:"40ml"}, price:14000 },
    ],
  },
  {
    id: "wine",
    kicker: { mn: "Шилмэл", en: "Cellar" },
    title:  { mn: "Дарс", en: "Wine" },
    note:   { mn: "Хундага / лонх", en: "By the glass / bottle" },
    items: [
      { name:{mn:"Шардоне", en:"Chardonnay"}, desc:{mn:"Цагаан, хуурай", en:"White, dry"}, price:16000, priceNote:{mn:"хундага", en:"glass"} },
      { name:{mn:"Совиньон Блан", en:"Sauvignon Blanc"}, desc:{mn:"Цагаан, шинэлэг", en:"White, crisp"}, price:16000, priceNote:{mn:"хундага", en:"glass"} },
      { name:{mn:"Каберне Совиньон", en:"Cabernet Sauvignon"}, desc:{mn:"Улаан, бялхам", en:"Red, full-bodied"}, price:18000, priceNote:{mn:"хундага", en:"glass"} },
      { name:{mn:"Пино Нуар", en:"Pinot Noir"}, desc:{mn:"Улаан, зөөлөн", en:"Red, silky"}, price:19000, priceNote:{mn:"хундага", en:"glass"} },
      { name:{mn:"Просекко", en:"Prosecco"}, desc:{mn:"Хөөсрөх", en:"Sparkling"}, price:120000, priceNote:{mn:"лонх", en:"bottle"}, badge:{mn:"Лонх", en:"Bottle"} },
    ],
  },
  {
    id: "beer",
    kicker: { mn: "Сэрүүн", en: "On Tap" },
    title:  { mn: "Шар айраг", en: "Beer" },
    note:   { mn: "Драфт ба лонхтой", en: "Draft & bottled" },
    items: [
      { name:{mn:"Лагер (драфт)", en:"Lager (draft)"}, desc:{mn:"0.5л", en:"0.5L"}, price:9000 },
      { name:{mn:"IPA (драфт)", en:"IPA (draft)"}, desc:{mn:"0.5л", en:"0.5L"}, price:11000 },
      { name:{mn:"Stout", en:"Stout"}, desc:{mn:"Бараан, өтгөн", en:"Dark, creamy"}, price:11000 },
      { name:{mn:"Импортын лонхтой", en:"Imported bottle"}, desc:{mn:"330мл", en:"330ml"}, price:12000 },
    ],
  },
  {
    id: "food",
    kicker: { mn: "Хооллол", en: "Kitchen" },
    title:  { mn: "Зууш ба хоол", en: "Snacks & Food" },
    note:   { mn: "Хуваалцахад тохиромжтой", en: "Perfect for sharing" },
    items: [
      { name:{mn:"Трюфель фри", en:"Truffle Fries"}, desc:{mn:"Пармезан, ургамлын ногоо", en:"Parmesan, herbs"}, price:15000, img:"assets/food-1.svg" },
      { name:{mn:"Бяслагны таваг", en:"Cheese Board"}, desc:{mn:"Сонгомол бяслаг, жимс, чанамал", en:"Curated cheeses, fruit, jam"}, price:32000, badge:{mn:"Хослол", en:"Share"}, img:"assets/food-2.svg" },
      { name:{mn:"Тахианы шарсан далавч", en:"Glazed Chicken Wings"}, desc:{mn:"Зөгийн бал, чили", en:"Honey, chili glaze"}, price:18000 },
      { name:{mn:"Сламон тартар", en:"Salmon Tartare"}, desc:{mn:"Авокадо, шохой, тост", en:"Avocado, lime, toast"}, price:26000, img:"assets/food-3.svg" },
      { name:{mn:"Веган боул", en:"Vegan Bowl"}, desc:{mn:"Улирлын ногоо, тахини", en:"Seasonal greens, tahini"}, price:17000, badge:{mn:"Веган", en:"Vegan"} },
    ],
  },
  {
    id: "other",
    kicker: { mn: "Согтууруулахгүй", en: "Zero Proof" },
    title:  { mn: "Бусад ундаа", en: "Other Drinks" },
    note:   { mn: "Согтууруулах бус ба халуун ундаа", en: "Non-alcoholic & hot drinks" },
    items: [
      { name:{mn:"Эспрессо", en:"Espresso"}, desc:{mn:"Дан / давхар", en:"Single / double"}, price:6000 },
      { name:{mn:"Капучино", en:"Cappuccino"}, desc:{mn:"", en:""}, price:8000 },
      { name:{mn:"Шинэ жүүс", en:"Fresh Juice"}, desc:{mn:"Улирлын", en:"Seasonal"}, price:9000 },
      { name:{mn:"Согтуургүй коктейль", en:"Mocktail"}, desc:{mn:"Барменийн сонголт", en:"Bartender's choice"}, price:12000, badge:{mn:"0%", en:"0%"} },
      { name:{mn:"Ус (хийтэй / хийгүй)", en:"Water (still / sparkling)"}, desc:{mn:"", en:""}, price:4000 },
    ],
  },
];

/* ---------- render ---------- */
const fmt = n => n.toLocaleString("en-US") + "₮";

function render(){
  const lang = document.body.dataset.lang;
  const pills = document.getElementById("pills");
  const main = document.getElementById("menu");
  pills.innerHTML = "";
  main.innerHTML = "";

  MENU.forEach((cat, i) => {
    // nav pill
    const a = document.createElement("a");
    a.href = "#" + cat.id;
    a.className = "pill" + (i === 0 ? " active" : "");
    a.dataset.target = cat.id;
    a.textContent = cat.title[lang];
    pills.appendChild(a);

    // section
    const sec = document.createElement("section");
    sec.className = "cat fade-up";
    sec.id = cat.id;
    sec.innerHTML = `
      <div class="cat-head">
        <h2>${cat.title[lang]}</h2>
        <span class="kicker">${cat.kicker[lang]}</span>
      </div>
      ${cat.note[lang] ? `<p class="cat-note">${cat.note[lang]}</p>` : ""}
      <div class="items"></div>`;
    const wrap = sec.querySelector(".items");

    cat.items.forEach(it => {
      const row = document.createElement("div");
      row.className = "item" + (it.img ? " has-img" : "");
      const badge = it.badge ? `<span class="badge">${it.badge[lang]}</span>` : "";
      const pn = it.priceNote ? ` <small>/ ${it.priceNote[lang]}</small>` : "";
      const desc = it.desc && it.desc[lang] ? `<div class="desc">${it.desc[lang]}</div>` : "";
      const thumb = it.img ? `<img class="thumb" src="${it.img}" alt="${it.name[lang]}" loading="lazy">` : "";
      row.innerHTML = `
        ${thumb}
        <div class="info"><span class="name">${it.name[lang]}</span>${badge}${desc}</div>
        <div class="price">${fmt(it.price)}${pn}</div>`;
      wrap.appendChild(row);
    });
    main.appendChild(sec);
  });

  initObservers();
}

/* ---------- scroll spy + reveal ---------- */
function initObservers(){
  const pills = [...document.querySelectorAll(".pill")];
  const secs = [...document.querySelectorAll(".cat")];

  // Fallback: very old browsers without IntersectionObserver still see everything.
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
  }, { threshold: .08 });
  secs.forEach(s => reveal.observe(s));
}

/* ---------- language toggle ---------- */
function setLang(lang){
  document.body.dataset.lang = lang;
  localStorage.setItem("dazzle-lang", lang);
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === lang));
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("dazzle-lang") || "mn";
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang(saved);
});

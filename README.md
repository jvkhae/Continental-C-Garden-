# C Garden — Food Menu (QR)

Тансаг dark-luxe + emerald загвартай, **Монгол + Англи** хосолсон, бүрэн ажиллагаатай
**дижитал меню вэбсайт** + түүн рүү шууд холбогддог **QR код**. Дурын утас, дурын
браузер (Chrome, Safari, …)-аас ажиллана.

---

## 🌐 Амьд хаяг (Live URL)

```
https://jvkhae.github.io/Continental-C-Garden-/
```

QR код яг **энэ хаяг** руу заана.

---

## 🚀 Ажиллуулах (1 удаагийн алхам)

> Энэ repo одоо **private**. GitHub Pages-ийн үнэгүй хувилбар private repo дээр
> ажиллахгүй тул менюг нийтлэхийн тулд repo-г **public** болгоно:

1. GitHub → repo → **Settings** → доош гүйгээд **Danger Zone** → **Change visibility** → **Make public**.
2. Дараа нь `Deploy C Garden menu` workflow автоматаар ажиллаж GitHub Pages-ийг
   **өөрөө асааж** (enablement: true) сайтыг нийтэлнэ.
3. `https://jvkhae.github.io/Continental-C-Garden-/` идэвхжинэ → QR шууд ажиллана.

> ⚠️ Анхаар: repo-г public болгоход энэ repo доторх **бүх файл** (санхүү, маркетинг г.м.)
> нийтэд ил болохыг санаарай. Хэрэв тэдгээрийг нуухыг хүсвэл менюг тусдаа public repo-д
> зөөвөл дээр — хэлээрэй, шилжүүлж өгье.

---

## 📁 Файлууд

| Файл | Зориулалт |
|------|-----------|
| `index.html` | Меню вэбсайт (sticky nav, бүх ангилал, МН/EN сэлгэх) |
| `assets/menu.js` | **Бүх меню агуулга энд** — нэр, тайлбар, үнэ, зураг |
| `assets/styles.css` | Dark-luxe emerald загвар |
| `assets/logo.svg` | C Garden wordmark |
| `assets/food-1..3.svg` | Хоолны зураг (одоогоор зурсан placeholder) |
| `qr.html` | Ширээний постер / table tent — QR-тэй, хэвлэхэд бэлэн |
| `assets/qr.svg` / `qr.png` | Үүсгэсэн QR код (CDN-гүй, найдвартай) |

---

## ✏️ Меню засах

`assets/menu.js` доторх `MENU` массивыг засна:

```js
{ name:{mn:"Трюфель фри", en:"Truffle Fries"},
  desc:{mn:"Пармезан", en:"Parmesan"},
  price:15000,                 // зөвхөн тоо — ₮ автоматаар нэмэгдэнэ
  img:"assets/food-1.svg" }    // зураг (заавал биш)
```

## 🖼️ Жинхэнэ хоолны зураг солих

Одоогийн 3 зураг нь зурсан placeholder (энэ орчинд гадны зургийн сайт хаалттай тул).
Жинхэнэ зургаа `assets/` дотор хийгээд `menu.js`-ийн `img` талбарыг заана. Жишээ:

```js
img:"assets/truffle-fries.jpg"
```

`.jpg`, `.png`, `.webp` бүгд болно. Хадгалаад push хийхэд автоматаар шинэчлэгдэнэ.

---

## 🖨️ Хэвлэх

`qr.html`-ийг браузераар нээж **Print** (Ctrl/Cmd + P) → постер цэвэр хэвлэгдэнэ.

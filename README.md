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

## 🚀 Ажиллуулах — GitHub Pages асаах (1 удаа, ~1 минут)

Repo одоо **public** тул дараах байдлаар Pages-ийг асаахад л меню амьд болно:

1. GitHub → repo → **Settings** → зүүн талд **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch** сонгох.
3. **Branch**: **`claude/relaxed-gauss-s2wt1x`** , фолдер: **`/ (root)`** → **Save**.
4. ~1 минут хүлээгээд `https://jvkhae.github.io/Continental-C-Garden-/` нээгдэнэ → **QR шууд ажиллана**.

> Энэ branch дээр C Garden меню (хоолны зураг, МН/EN, Velvet загвар) байрладаг.
> Pages-ийг ямар ч branch-аас үйлчлүүлж болно — голдуу `/ (root)` фолдерыг сонгоно.
>
> Тэмдэглэл: GitHub Actions автомат deploy ажиллахгүй (token-д Pages-ийг анх
> асаах эрх байдаггүй), тиймээс дээрх "Deploy from a branch" арга хамгийн найдвартай.

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

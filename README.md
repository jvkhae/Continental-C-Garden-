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
| `assets/menu.js` | **Бүх меню агуулга энд** — ангилал, дэд бүлэг, нэр, үнэ, зураг |
| `assets/styles.css` | Dark-luxe emerald загвар |
| `assets/logo.svg` | C Garden wordmark |
| `qr.html` | Ширээний постер / table tent — QR-тэй, хэвлэхэд бэлэн |
| `assets/qr.svg` / `qr.png` | Үүсгэсэн QR код (CDN-гүй, найдвартай) |

---

## ✏️ Меню засах

`assets/menu.js` доторх `MENU` дотор. Нэг зүйл ийм харагдана:

```js
{ n: "GinX", p: 40000 }                 // нэр + үнэ (₮ автоматаар)
{ n: "Bull Dog", note: "0.75L", p: 300000 }   // хэмжээ/тайлбартай
{ n: "Maison Castel Merlot", p: 20000, p2: 99000 }  // хундага / лонх
{ n: "GinX", p: 40000, img: "assets/ginx.jpg" }     // зурагтай
```

- **Үнэ:** `p` (ба хосолсон үнэ бол `p2`) тоог солих.
- **Зураг нэмэх:** зургаа `assets/`-д хийгээд `img:"assets/ginx.jpg"` гэж заах
  (`.jpg/.png/.webp`). Зураг заасан зүйлд thumbnail автоматаар гарна.

Хадгалаад push хийхэд ~1 минутын дотор сайт шинэчлэгдэнэ.

---

## 🖨️ Хэвлэх

`qr.html`-ийг браузераар нээж **Print** (Ctrl/Cmd + P) → постер цэвэр хэвлэгдэнэ.

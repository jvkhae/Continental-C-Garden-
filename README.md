# DAZZLE Lounge — QR Menu

Тансаг, харанхуй, гламур (**dark luxe + emerald**) загвартай, **Монгол + Англи** хосолсон,
бүрэн ажиллагаатай **дижитал меню вэбсайт** + түүн рүү шууд холбогддог **QR код**.

> Сонгосон чиглэл: **Velvet** — гүн ногоон gradient, тансаг, картан мэдрэмж.

---

## 🌐 Амьд хаяг (Live URL)

```
https://jvkhae.github.io/Continental-C-Garden-/
```

QR код яг **энэ хаяг** руу заадаг. QR-г уншуулахад шууд меню нээгдэнэ.

---

## 🚀 Хэрхэн ажиллуулах вэ (1 удаагийн тохиргоо)

QR ажиллахын тулд меню интернэтэд байрлах ёстой. GitHub Pages-ийг асаахад л болно:

1. GitHub дээр энэ repo → **Settings** → **Pages**.
2. **Build and deployment** → **Source** хэсэгт **GitHub Actions** сонгох.
3. Дуусаад хүлээнэ — `Deploy DAZZLE menu` workflow автоматаар ажиллаж сайтыг нийтэлнэ.
4. `https://jvkhae.github.io/Continental-C-Garden-/` хаяг идэвхжинэ → QR шууд ажиллана.

> Дараа нь `claude/relaxed-gauss-s2wt1x` эсвэл `main` branch руу push хийх бүрт автоматаар дахин deploy хийгдэнэ.

---

## 📁 Файлууд

| Файл | Зориулалт |
|------|-----------|
| `index.html` | Меню вэбсайт (sticky nav, бүх ангилал, МН/EN сэлгэх) |
| `assets/menu.js` | **Бүх меню агуулга энд** — нэр, тайлбар, үнэ. Зөвхөн энэ файлыг засна. |
| `assets/styles.css` | Velvet dark-luxe загвар |
| `assets/logo.svg` | DAZZLE wordmark (алмаз голдоо) |
| `qr.html` | Ширээний постер / table tent — QR-тэй, хэвлэхэд бэлэн |
| `assets/qr.svg` / `assets/qr.png` | Үүсгэсэн QR код (CDN-гүй, найдвартай) |

---

## ✏️ Меню засах

`assets/menu.js` доторх `MENU` массивыг засна. Жишээ:

```js
{ name:{mn:"Эмералд Мартини", en:"Emerald Martini"},
  desc:{mn:"Жин, базилик", en:"Gin, basil"},
  price:28000,                       // зөвхөн тоо — ₮ автоматаар нэмэгдэнэ
  badge:{mn:"Онц", en:"Signature"} } // нэмэлт, хүсвэл
```

Хадгалаад push хийхэд сайт автоматаар шинэчлэгдэнэ.

---

## 🔁 QR-ийн хаяг өөрчлөгдвөл

Хэрэв өөр домэйн/хаяг ашиглавал QR-г дахин үүсгэнэ:

```bash
pip install segno
python - <<'PY'
import segno
url = "https://taniih-shine-hayag.example"   # шинэ хаягаа энд
qr = segno.make(url, error='h')
qr.save("assets/qr.svg", scale=16, border=4, dark="#0a1f17", light="#ffffff")
qr.save("assets/qr.png", scale=16, border=4, dark="#0a1f17", light="#ffffff")
PY
```

`qr.html` доторх харагдах хаяг (`.url`) болон `index.html`-ийн холбоосыг мөн шинэчилнэ.

---

## 🖨️ Хэвлэх

`qr.html`-ийг браузераар нээгээд **Print** (Ctrl/Cmd + P) → постер цагаан дэвсгэр дээр цэвэр хэвлэгдэнэ.

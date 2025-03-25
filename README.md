# Gemini AI Chatbot

Bu layihə **Google Gemini AI** modelindən istifadə edərək chatbot yaratmaq üçün hazırlanmışdır. 

## 📌 Xüsusiyyətlər
- **Google Gemini AI** API ilə inteqrasiya
- **React + Vite** mühitində işləyir
- **.env** faylından API açarını oxuyur
- **Dostluq interfeysi** və **asan istifadəsi** var
- **Təhlükəsizlik ayarları** mövcuddur (zərərli məzmunları bloklamaq üçün)

---

## 🔧 Quraşdırma və İşə Salma

### 1️⃣. **Depoyu Klonla**
```sh
git clone https://github.com/MehemmedQ2003/Gemini_Chatbot.git
cd gemini-chatbot
```

### 2️⃣. **Asılılıqları Quraşdır**
```sh
npm install
```

### 3️⃣. **API Açarını Əlavə Et**
Layihənin **kök qovluğunda** `.env` faylı yaradın və API açarınızı daxil edin:

```
VITE_GOOGLE_API_KEY=your-google-api-key
```

**Google Gemini API Açarını Necə Əldə Etmək Olar?**
1. [Google AI Studio](https://aistudio.google.com/) səhifəsinə daxil olun.
2. **Hesabınızı yaradın və ya daxil olun**.
3. **"API Keys"** bölməsinə keçin.
4. **Yeni API açarı yaradın** və onu `.env` faylınıza əlavə edin.

### 4️⃣. **Serveri Başlat**
```sh
npm run dev
```

---

## 📦 Asılılıqlar (Packages)
Bu layihə aşağıdakı **əsas asılılıqlardan** istifadə edir:

### **Frontend Paketləri:**
- `react` – React kitabxanası
- `react-dom` – DOM ilə işləmək üçün React kitabxanası
- `vite` – İnkişaf serveri və bundler

### **Digər Faydalı Paketlər:**
- `eslint` – Kod keyfiyyətini təmin etmək üçün
- `prettier` – Kod formatlama aləti

Bütün bu paketləri `package.json` faylından yoxlaya və yeniləyə bilərsiniz.

---

## 🚀 İstifadə Qaydası

1. **Sual verin:** Chat interfeysindən istifadə edərək sualınızı yazın.
2. **Cavab alın:** Gemini AI avtomatik olaraq cavab verəcək.
3. **Tarixi saxlayın:** Söhbət tarixi saxlanılır və sonrakı istifadə üçün mövcuddur.

---

## 📌 Texnologiyalar
✅ **Frontend:** React, Vite, Tailwind CSS  
✅ **Deployment:** Vercel, Netlify və ya GitHub Pages dəstəklənir

---

## ⚠️ Təhlükəsizlik və Məhdudiyyətlər
- API açarınızı **heç vaxt** ictimaiyyətə açıq paylaşmayın.
- `.gitignore` faylında `.env` faylını əlavə etməyi unutmayın:
  ```
  .env
  ```
- Gemini AI təhlükəsizliyi təmin etmək üçün **təhlükəli kontentləri bloklayır**.

---

## 📜 Lisenziya
Bu layihə **MIT** lisenziyası altında paylanır.

---



⭐ **Layihəni bəyəndinizsə, GitHub-da ulduz verməyi unutmayın!** ⭐


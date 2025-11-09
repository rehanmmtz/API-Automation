# 🌐 Reqres API Automation Testing

## 🧭 Deskripsi Proyek

Project ini dibuat untuk **melatih kemampuan API Automation Testing** menggunakan **JavaScript**, **Mocha**, dan **Chai**.  
Target API yang digunakan adalah [Reqres](https://reqres.in/), situs layanan demo publik yang menyediakan API dummy untuk latihan membuat, membaca, memperbarui, dan menghapus data user.

Tujuan utama proyek ini adalah:

1. Menguasai **HTTP request/response** dan status code.  
2. Mengotomasi pengujian endpoint CRUD (Create, Read, Update, Delete) user.  
3. Membuat **automated test** yang bisa dijalankan berulang tanpa intervensi manual.  
4. Mendapatkan laporan hasil testing yang rapi, agar mudah memonitor kualitas API.
   
---

## 🎯 Scope Pengujian

Automated test ini mencakup beberapa endpoint utama Reqres:

- **POST /users** – Membuat user baru (Create).  
- **GET /users/{id}** – Mengambil data user tertentu (Read).  
- **PUT /users/{id}** – Memperbarui data user (Update).  
- **DELETE /users/{id}** – Menghapus user (Delete).

Setiap endpoint diuji dengan beberapa skenario, termasuk:

- Validasi **status code** (200, 201, 204, 404, dll.)  
- Validasi **response body** sesuai spesifikasi API  
- Error handling untuk request yang tidak valid  

---

## 🧰 Tech Stack

| Komponen | Deskripsi |
|----------|-----------|
| Bahasa | JavaScript (Node.js) |
| Framework Testing | Mocha |
| Assertion | Chai |
| Target API | [Reqres](https://reqres.in/) |

---

## 🚀 Fitur Utama

- 🔍 **CRUD API Automation** – Testing otomatis untuk Create, Read, Update, Delete user.  
- 📊 **Assertion & Validasi Response** – Memastikan response sesuai ekspektasi.  
- 🧩 **Struktur Modular** – Endpoint dan test case dipisah supaya mudah dikembangkan.  

---

## 💻 Cara Menjalankan Project ini
- Clone Project ini
- jalankan npm install
- jalankan test: ``npm run testing``
- kemudian setelah selesai dijalakan, report akan otomatis tergenerate dan dapat dilihat melalui mochawesome-report.html nya

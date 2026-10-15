# Wireframe & User Flow — SportSpace (Arena Hub Management)

Sub-CPMK: Merancang UI/UX aplikasi (proyek).

Halaman yang sudah ada (Beranda, Daftar/Tambah Arena, Daftar/Tambah Member) belum mencakup fitur Login, Dashboard Admin, dan Reservasi/Check-out. Dokumen ini merancang wireframe untuk halaman-halaman tersebut sebelum diimplementasikan.

## Aktor
- **Tamu**: hanya bisa melihat Katalog Arena di Beranda tanpa login[cite: 19, 23].
- **Admin**: login untuk mengakses seluruh fitur CRUD (Member & Arena) dan transaksi reservasi[cite: 19, 23].

## User Flow — Reservasi Arena Baru

[Admin Login] -> [Dashboard] -> [Pilih menu "Reservasi Baru"]
        -> [Pilih Member] -> [Pilih Arena (Syarat: Status "Tersedia")]
        -> [Simpan] -> [Status Arena otomatis berubah jadi "Dipakai"] -> [Kembali ke Dashboard]


## User Flow — Check-out (Selesai Bermain)

[Dashboard] -> [Menu "Check-out / Selesai"] -> [Cari reservasi aktif (berdasarkan ID/Nama Arena)]
        -> [Tandai "Selesai"] -> [Status Arena otomatis kembali "Tersedia"]
        -> [Kembali ke Dashboard]

## Wireframe: Halaman Login

+--------------------------------------+
|             SportSpace               |
|--------------------------------------|
|                                      |
|          [ Login Admin ]             |
|                                      |
|   Username : [______________]        |
|   Password : [______________]        |
|                                      |
|   [ Masuk ke Dashboard Reservasi ]   |
|                                      |
+--------------------------------------+

## Wireframe: Dashboard Admin (Setelah Login)

+-------------------------------------------------------------+
| SportSpace      Beranda | Arena | Member | Reservasi | (Admin) Logout |
|-------------------------------------------------------------|
|                                                             |
|  [Total Arena]   [Member Aktif]   [Sedang Dipakai]          |
|                                                             |
|  Aksi Cepat:                                                |
|  [ + Reservasi Baru ]   [ + Check-out Arena ]               |
|                                                             |
|  Jadwal & Reservasi Hari Ini                                |
|  --------------------------------------------------         |
|  Member | Arena | Jam Mulai | Durasi | Status               |
+-------------------------------------------------------------+

## Wireframe: Form Reservasi Baru

+--------------------------------------+
|  Form Reservasi Arena                |
|--------------------------------------|
|  Pilih Member : [ dropdown anggota ] |
|  Pilih Arena  : [ dropdown, (hanya yg Tersedia) ] |
|  Tanggal      : [ auto: hari ini ]   |
|  Durasi (Jam) : [ ____ ]             |
|                                      |
|        [  Simpan Reservasi  ]        |
+--------------------------------------+

## Konsistensi dengan Desain yang Sudah Berjalan

Warna tema (Sage Green/Earth Tone), tipografi navbar, bentuk kartu (rounded-4), dan tombol (pill) akan tetap mengikuti assets/css/style.css yang sudah dibangun di Jobsheet 3.   
Navbar akan ditambah menu Reservasi dan indikator (Nama Admin) Logout saat implementasi nanti.   
Edge case (Aturan Bisnis): Arena yang statusnya "Dipakai" atau "Perbaikan" tidak boleh muncul atau tidak bisa dipilih di form Reservasi. 


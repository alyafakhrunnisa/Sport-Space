// Ganti fungsi initHapusConfirm di app.js lu dengan ini:
function initHapusConfirm() {
    // Menggunakan Event Delegation khusus untuk data dinamis (Jobsheet 06)
    document.addEventListener("click", function (e) {
        // Cari elemen terdekat dari yang diklik yang punya class btn-hapus-aes
        const btn = e.target.closest(".btn-hapus-aes");
        
        // Kalau yang diklik BUKAN tombol hapus, hentikan fungsi
        if (!btn) return;

        // Kalau tombol hapus diklik, cari baris (tr) induknya
        const row = btn.closest("tr");
        
        // Munculkan pop-up konfirmasi
        const yakin = confirm("Yakin ingin menghapus data ini?");
        if (yakin && row) {
            row.remove();
        }
    });
}

// ===== 2. Filter / Pencarian Tabel Real-Time =====
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        const keyword = input.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        
        rows.forEach(function (row) {
            const teks = row.textContent.toLowerCase();
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
    });
}

// ===== 3. Validasi Form Tambah (Arena & Member) =====
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;

        const idInput = form.querySelector("[name='id_arena'], [name='id_member']");
        if (idInput && idInput.value.trim() === "") {
            tampilkanError(idInput, "ID wajib diisi.");
            valid = false;
        } else if (idInput) {
            hapusError(idInput);
        }

        const namaInput = form.querySelector("[name='nama']");
        if (namaInput && namaInput.value.trim() === "") {
            tampilkanError(namaInput, "Nama wajib diisi.");
            valid = false;
        } else if (namaInput) {
            hapusError(namaInput);
        }

        const hargaInput = form.querySelector("[name='harga']");
        if (hargaInput) {
            const nilaiHarga = parseInt(hargaInput.value, 10);
            if (isNaN(nilaiHarga) || nilaiHarga <= 0) {
                tampilkanError(hargaInput, "Harga harus berupa angka lebih dari 0.");
                valid = false;
            } else {
                hapusError(hargaInput);
            }
        }

        const noHpInput = form.querySelector("[name='no_hp']");
        if (noHpInput) {
            const isAngka = /^\d+$/.test(noHpInput.value.trim());
            if (!isAngka || noHpInput.value.trim().length < 9) {
                tampilkanError(noHpInput, "No HP harus berupa angka minimal 9 digit.");
                valid = false;
            } else {
                hapusError(noHpInput);
            }
        }

        if (!valid) {
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});
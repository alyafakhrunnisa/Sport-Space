async function muatDaftarArena() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const res = await fetch("../data/arena.json");
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarArena = await res.json();

        daftarArena.forEach(function (arena) {
            const tr = document.createElement("tr");
            
            let badgeClass = arena.status === "Tersedia" ? "bg-success-subtle text-success border border-success-subtle" : "bg-danger-subtle text-danger border border-danger-subtle";
            
            tr.innerHTML =
                "<td class=\"px-3\">" + arena.id_arena + "</td>" +
                "<td class=\"px-3\">" + arena.nama + "</td>" +
                "<td class=\"px-3\">" + arena.kategori + "</td>" +
                "<td class=\"px-3\">Rp " + arena.harga.toLocaleString('id-ID') + "/jam</td>" +
                "<td class=\"px-3 text-center\">" +
                    "<span class=\"badge rounded-pill px-3 py-2 " + badgeClass + "\" style=\"font-weight: 600;\">" + arena.status + "</span>" +
                "</td>" +
                "<td class=\"px-3 text-center\">" +
                    "<button type=\"button\" class=\"btn btn-sm btn-edit-aes rounded-pill px-3 py-1 shadow-sm me-1\"><i class=\"bi bi-pencil-square\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn-sm btn-hapus-aes rounded-pill px-3 py-1 shadow-sm\"><i class=\"bi bi-trash\"></i></button>" +
                "</td>";
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML =
            "<tr><td colspan=\"6\" class=\"text-center py-4 text-danger\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarArena);
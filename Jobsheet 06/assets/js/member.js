async function muatDaftarMember() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const res = await fetch("../data/member.json");
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarMember = await res.json();

        daftarMember.forEach(function (member) {
            const tr = document.createElement("tr");
            
            let tipeHtml = member.tipe === "VIP" 
                ? "<span class=\"badge rounded-pill bg-warning-subtle text-warning-emphasis border border-warning-subtle px-3 py-1 shadow-sm\" style=\"font-weight: 600;\"><i class=\"bi bi-star-fill me-1\"></i> VIP</span>" 
                : "<span class=\"badge rounded-pill bg-secondary-subtle text-secondary px-3 py-1\">Reguler</span>";

            tr.innerHTML =
                "<td class=\"px-3\">" + member.id_member + "</td>" +
                "<td class=\"px-3\">" + member.nama + "</td>" +
                "<td class=\"px-3\">" + tipeHtml + "</td>" +
                "<td class=\"px-3\">" + member.no_hp + "</td>" +
                "<td class=\"px-3\">" + member.email + "</td>" +
                "<td class=\"px-3\">" + member.tgl_gabung + "</td>" +
                "<td class=\"px-3 text-center\">" +
                    "<button type=\"button\" class=\"btn btn-sm btn-edit-aes rounded-pill px-3 py-1 shadow-sm me-1\"><i class=\"bi bi-pencil-square\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn-sm btn-hapus-aes rounded-pill px-3 py-1 shadow-sm\"><i class=\"bi bi-trash\"></i></button>" +
                "</td>";
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML =
            "<tr><td colspan=\"7\" class=\"text-center py-4 text-danger\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarMember);
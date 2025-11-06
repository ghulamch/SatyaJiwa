window.addEventListener("DOMContentLoaded", async function() {
    // Fungsi untuk mengambil sidebar
    const getSidebar = async () => {
        const response = await fetch('partials/sidebar.html');
        return await response.text();
    };

    // Menyisipkan sidebar setelah mengambil kontennya
    const sidebarHTML = await getSidebar();
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;

    // Ambil nama file dari URL yang sedang dibuka
    const currentPage = window.location.pathname.split("/").pop();

    // Pilih semua elemen link di sidebar
    const links = document.querySelectorAll(".nav-link");

    // Looping dan tambahkan kelas active jika sesuai
    links.forEach(link => {
        const page = link.getAttribute("data-page");
        if (page === currentPage.replace('.html', '')) {
            link.classList.add("active");
        }
    });
});

window.addEventListener("DOMContentLoaded", async function() {
    const getSidebar = async () => {
        const response = await fetch('partials/sidebar.html');
        return await response.text();
    };

    const sidebarHTML = await getSidebar();
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        const page = link.getAttribute("data-page");
        if (page === currentPage.replace('.html', '')) {
            link.classList.add("active");
        }
    });
});

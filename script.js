// Menampilkan halaman berdasarkan pilihan menu
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none'; // Menyembunyikan halaman lainnya
    });
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block'; // Menampilkan halaman yang dipilih
}

window.onload = function() {
    showPage('menu'); // Menampilkan halaman menu saat pertama kali halaman dibuka
};
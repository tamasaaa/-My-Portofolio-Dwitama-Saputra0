// File ini disiapkan untuk interaktivitas di masa mendatang.
// Saat ini semua fungsionalitas utama sudah ditangani oleh Tailwind CSS dan CSS murni.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Dwitama Saputra Loaded Successfully');
    
    // Contoh: Smooth scroll tambahan jika diperlukan (opsional karena CSS sudah menangani)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Logika kustom bisa ditambahkan di sini
        });
    });
});
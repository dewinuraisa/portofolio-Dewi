// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Terima kasih!',
        text: 'Pesan Anda telah terkirim.',
        confirmButtonColor: '#0d6efd'
    });
    this.reset();
});

// Function to download CV
function downloadCV() {
    Swal.fire({
        icon: 'info',
        title: 'Download CV',
        text: 'CV ATS Anda sedang diunduh...',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
}
function downloadCV() {
    // Tampilkan notifikasi SweetAlert2
    Swal.fire({
        icon: 'info',
        title: 'Download CV',
        text: 'CV ATS Anda sedang diunduh...',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });

    // Buat elemen <a> untuk unduhan
    const link = document.createElement('a');
    link.href = './cv.pdf'; // Path relatif ke file PDF
    link.download = 'CV_Dewi_Nur_Aisa.pdf'; // Nama file saat diunduh
    document.body.appendChild(link); // Tambahkan elemen ke DOM
    link.click(); // Klik elemen untuk memulai unduhan
    document.body.removeChild(link); // Hapus elemen setelah selesai
}

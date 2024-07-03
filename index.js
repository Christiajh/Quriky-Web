document.addEventListener("DOMContentLoaded", function() {
    var logoLink = document.querySelector('.ctn');
    var notification = document.getElementById('notification');
    
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        notification.innerText = "Functionality is only available on the shop page";
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 1000); // Menghilangkan notifikasi setelah 3 detik
    });
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

///////////////////////////////////////
// function showNotification(message) {
//     var notification = document.getElementById('notification');
//     notification.innerText = message;
//     notification.style.display = 'block';
//     setTimeout(function() {
//         notification.style.display = 'none'; // Sembunyikan notifikasi setelah beberapa detik
//     }, 3000); // Durasi notifikasi ditampilkan (misalnya 3 detik)
// }

// // Ambil elemen tautan Register
// var registerLink = document.getElementById('register-link');

// // Tambahkan event listener untuk tautan Register
// registerLink.addEventListener('click', function(event) {
//     // Cek apakah pengguna sudah login
//     var isLoggedIn = localStorage.getItem('isLoggedIn');

//     if (!isLoggedIn || isLoggedIn !== 'true') {
//         // Jika pengguna belum login, tampilkan notifikasi
//         showNotification('You must login first!');
//         event.preventDefault(); // Hentikan aksi bawaan dari tautan Register
//     } else {
//         // Jika sudah login, arahkan ke halaman register.html
//         window.location.href = 'register.html'; // Sesuaikan dengan path dan nama file yang benar
//     }
// });

// // Otomatiskan pengalihan navigasi untuk halaman lain
// var navigationLinks = document.querySelectorAll('nav a');

// navigationLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         var isLoggedIn = localStorage.getItem('isLoggedIn');

//         if (!isLoggedIn || isLoggedIn !== 'true') {
//             event.preventDefault(); // Hentikan aksi bawaan dari tautan navigasi lainnya
//             showNotification('You must login first!');
//         } else {
//             // Jika sudah login, lanjutkan ke halaman yang dituju
//             // Contoh: window.location.href = link.getAttribute('href');
//         }
//     });
// });

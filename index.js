// Mencegah klik kanan untuk memblokir menu konteks
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Fungsi untuk menangani submit form login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Hindari pengiriman form
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validasi username dan password (contoh sederhana)
    if (username === 'Elkana' && password === 'Sitorus') {
        document.getElementById('error-message').innerText = 'Login berhasil!';
        showLoading();
        setTimeout(function() {
            hideLoading();
            window.location.href = 'index.html'; // Redirect ke halaman setelah login
        }, 2000);
    } else {
        document.getElementById('error-message').innerText = 'Username atau password salah.';
    }
});

// Fungsi untuk menampilkan overlay loading
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

// Fungsi untuk menyembunyikan overlay loading
function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Fungsi untuk mengarahkan kembali ke halaman login jika mencoba mengakses register.html tanpa login
function checkLoginStatus() {
    var isLoggedIn = /* logika untuk mengecek apakah sudah login */ false; // Ganti dengan logika sesuai kebutuhan
    if (!isLoggedIn) {
        window.location.href = 'register.html'; // Ganti dengan halaman login Anda
    }
}

// Panggil fungsi checkLoginStatus pada saat halaman register.html dimuat
checkLoginStatus();

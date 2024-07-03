document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        // Ganti dengan username dan password yang Anda inginkan
        var validUsername = 'Elkana';
        var validPassword = 'Sitorus';

        if (username === '' || password === '') {
            document.getElementById('error-message').innerText = 'Username or password cannot be blank';
            return; // Stop further execution
        }

        // Simulasi pengecekan login
        if (username === validUsername && password === validPassword) {
            // Bersihkan pesan error
            document.getElementById('error-message').innerText = '';

            // Simpan status login ke localStorage
            localStorage.setItem('isLoggedIn', 'true');

            // Tampilkan notifikasi sukses login
            alert('Login Success');

            // Redirect ke halaman index.html setelah 2 detik
            setTimeout(function() {
                window.location.href = 'index.html';
                // Setelah redirect, tambahkan pesan instruksi ke halaman index.html
                var successMessage = document.createElement('p');
                successMessage.innerText = 'You have successfully logged in!';
                successMessage.style.color = 'green';
                successMessage.style.fontWeight = 'bold';
                successMessage.style.marginTop = '20px';
                document.body.appendChild(successMessage); // Tambahkan pesan ke dalam body halaman
            }, 2000); // Delay 2 detik sebelum redirect
        } else {
            // Tampilkan pesan error jika login gagal
            document.getElementById('error-message').innerText = 'Invalid username or password';
        }
    });
});

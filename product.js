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
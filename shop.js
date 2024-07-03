function showMenu() {
  document.getElementById('menu').style.display = 'block';
}

function checkMouseLeave(event) {
  var e = event.toElement || event.relatedTarget;
  if (e && (e.parentNode == this || e == this)) {
      return;
  }
  document.getElementById('menu').style.display = 'none';
}

function keepMenu() {
  document.getElementById('menu').style.display = 'block';
}


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
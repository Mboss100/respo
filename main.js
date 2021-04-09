var element = document.getElementById('menu-icon');

element.addEventListener("click", show);

function show() {
  var menu = document.getElementById('nav-links')

  menu.style.display = 'block'
}
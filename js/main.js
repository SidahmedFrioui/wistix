function toggleClass() {
  var burgerMenu = document.getElementById('burger')
  if(burgerMenu.classList.contains('is-active')) {
    burgerMenu.classList.remove('is-active')
  } else {
    burgerMenu.classList.add('is-active')
  }
}

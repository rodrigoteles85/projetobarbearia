let menuMobile = document.querySelector('.cabecalho__menu')
let botaoMenu = document.querySelector('.cabecalho__botao')
let click = document.querySelectorAll('.cabecalho__menu-link')

let aberto = false

botaoMenu.onclick = function abrirOuFecharMenu() {
  if (aberto === true) {
    aberto = false
    menuMobile.classList.remove('aberto')
    botaoMenu.innerHTML = `<img src="/img/menu_black_24dp (1).svg" alt="Menu aberto">`
  } else if (aberto === false) {
    aberto = true
    menuMobile.classList.add('aberto')
    botaoMenu.innerHTML = `<img src="/img/close_black_24dp.svg" alt="Menu fechado">`
  }
}



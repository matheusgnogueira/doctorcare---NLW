// adicionar evento scroll executando a função onscroll - isso sendo feito em toda a pagina - remove erro
window.addEventListener('scroll', onScroll)

// para quando uma rolagem no scroll acontecer o menun ficar visivel de acordo com o navigation in css
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // const (constante) é uma variavel e sempre que usado o valor apos = é constante, ou seja nao irá se alterar [neste caso é o calculo]

  // let (let it change) é uma variavel que deixa mudar (diferente de const)

  const targetLine = scrollY + innerHeight / 2

  // o topo da seção
  const sectionTop = section.offsetTop

  // altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha algo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linh alvo?',
    sectionTopReachOrPassedTargetline
  )

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else navigation.classList.remove('scroll')
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else backToTopButton.classList.remove('show')
}

//  ABRIR o menu navigation
function openMenu() {
  document.body.classList.add('menu-expanded')
}

// FECHAR o menu navigation
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// scrollreveal lib
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about header,
#about .content p,
#about .content img
`)

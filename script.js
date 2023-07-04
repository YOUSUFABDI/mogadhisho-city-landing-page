const btnHumberger = document.querySelector('#btnHumberger')
const header = document.querySelector('.header__wrapper')
const headerMenu = document.querySelector('.header__menu')

//Animating
gsap.fromTo(
  '.right',
  { x: '2000%', opacity: 0 },
  { x: '0%', delay: 0.1, duration: 0.75, opacity: 0.8, ease: 'Power3.easeOut' }
)

gsap.fromTo(
  '.logo',
  { x: -200, opacity: 0 },
  { duration: 0.95, delay: 0.5, x: 0, opacity: 1, ease: 'Power3.easeOut' }
)

gsap.set('.info', { opacity: 0 })
gsap.fromTo(
  '.info',
  { y: '100%', opacity: 0 },
  { y: 0, opacity: 1, delay: 0.9, duration: 1.55 }
)

gsap.fromTo(
  '.header__toggle',
  { x: 200, opacity: 0 },
  { duration: 1.88, delay: 1.33, x: 0, opacity: 1 }
)

// opening and closing nav menu mobile
function openNavMenu() {
  if (header.classList.contains('open')) {
    header.classList.remove('open')
  } else {
    header.classList.add('open')
  }
}

//Eventlistener
btnHumberger.addEventListener('click', openNavMenu)

let temps;

document.querySelector('.play').addEventListener('click', () => {
  document.querySelector('.div1-remodel').classList.add('animation')
  document.querySelector('.js-recto-txt').classList.add('animation')
  clearTimeout(temps)
  temps = setTimeout(() => {
    document.querySelector('.div1-remodel').classList.remove('animation')
    document.querySelector('.js-recto-txt').classList.remove('animation')
  }, 730)
})

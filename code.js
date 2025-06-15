const base = [
  {a: 0},
  {b: 1},
  {c: 2},
  {d: 3},
  {e: 4},
  {f: 5},
  {g: 6},
  {h: 7},
  {i: 8},
  {j: 9},
  {k: 10},
  {l: 11},
  {m: 12},
  {n: 13},
  {o: 14},
  {p: 15},
  {q: 16},
  {r: 17},
  {s: 18},
  {t: 19},
  {u: 20},
  {v: 21},
  {w: 22},
  {x: 23},
  {y: 24},
  {z: 25},
]

const haut = document.querySelector('.js-send')
const middle = document.querySelector('.middle')
let idioma = 'fr'

function checkIfEmpty() {
  const entry = document.querySelector('.js-entry')
  if (entry.value === '') {
    return false
  }
  return true
}

function changeCheckState() {
  const checkbox = document.querySelector('#check');
  checkbox.checked = !checkbox.checked;
}

function putUserMessageHtml() {
  let entry = document.querySelector('.js-entry').value
  const check = document.querySelector('#check').checked

  if (check === true) {
    middle.innerHTML += `<div class="right"><p>THE WORLD HAS BEEN HIDED</p></div>`

  } else {
    middle.innerHTML += `<div class="right"><p>${entry}</p></div>`
  }
  decoder(entry.toLowerCase())
  document.querySelector('.js-entry').value = ''
}

function putBotMessageHtml(nouvelPhrase) {
  middle.innerHTML += `<div class="left"><p>${nouvelPhrase}</p></div>`
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (checkIfEmpty()) {
      putUserMessageHtml()
    }
  } else if (event.key === '#') {
      changeCheckState()
    }
})


document.querySelector('#check').addEventListener('click', () => {
  const check = document.querySelector('#check').checked
  let entry = document.querySelector('.js-entry').value

  if (check === true) {
    document.querySelector('.mty').innerHTML = `
      <input type="password" placeholder="Demander a Various" class="js-entry">
    `

  } else if (check === false) {
    document.querySelector('.mty').innerHTML = `
      <input type="text" placeholder="Demander a Various" class="js-entry">
    `
  }
  document.querySelector('.js-entry').value = entry
})

haut.addEventListener('click', () => {
  if (checkIfEmpty()) {
    putUserMessageHtml()
  }
})

document.querySelector('.js-menu-bar').addEventListener('click', () => {
  const menu = document.querySelector('.menuBox')

  if (menu.classList.contains('menuBoxShow')) {
    menu.classList.remove('menuBoxShow')
  } else {
    menu.classList.add('menuBoxShow')
  }
  document.querySelector('.js-idioma').addEventListener('click', () => {
    if (idioma === 'fr') {
      idioma = 'en'
    } else {
      idioma = 'fr'
    }

    setIdioma()
  })
})

function setIdioma() {
  if (idioma === 'en') {
    document.querySelector('.js-entry').placeholder = 'Ask To Various'
    document.querySelector('.js-idioma').innerHTML = 'Change Language 🌐'
    document.querySelector('.js-settigns').innerHTML = 'Settings ⚙️'
  } else {
    document.querySelector('.js-entry').placeholder = 'Demander a Various'
    document.querySelector('.js-idioma').innerHTML = 'Changer la Langue 🌐'
    document.querySelector('.js-settigns').innerHTML = 'Paramètre ⚙️'
  }
}

document.querySelector('.reset').addEventListener('click', () => {
  document.querySelector('.middle').innerHTML = ``
})


function Calculate(n) {
  return n * 1.5 * 2.5 * 10
}

function decoder(phrase) {
  let nouvelPhrase = '';

  for (const lettre of phrase) {
    if (lettre === 'a') {
      nouvelPhrase += String(Calculate(1)) + ' ';
    } else if (lettre === 'b') {
      nouvelPhrase += String(Calculate(2)) + ' ';
    } else if (lettre === 'c') {
      nouvelPhrase += String(Calculate(3)) + ' ';
    } else if (lettre === 'd') {
      nouvelPhrase += String(Calculate(4)) + ' ';
    } else if (lettre === 'e') {
      nouvelPhrase += String(Calculate(5)) + ' ';
    } else if (lettre === 'f') {
      nouvelPhrase += String(Calculate(6)) + ' ';
    } else if (lettre === 'g') {
      nouvelPhrase += String(Calculate(7)) + ' ';
    } else if (lettre === 'h') {
      nouvelPhrase += String(Calculate(8)) + ' ';
    } else if (lettre === 'i') {
      nouvelPhrase += String(Calculate(9)) + ' ';
    } else if (lettre === 'j') {
      nouvelPhrase += String(Calculate(10)) + ' ';
    } else if (lettre === 'k') {
      nouvelPhrase += String(Calculate(11)) + ' ';
    } else if (lettre === 'l') {
      nouvelPhrase += String(Calculate(12)) + ' ';
    } else if (lettre === 'm') {
      nouvelPhrase += String(Calculate(13)) + ' ';
    } else if (lettre === 'n') {
      nouvelPhrase += String(Calculate(14)) + ' ';
    } else if (lettre === 'o') {
      nouvelPhrase += String(Calculate(15)) + ' ';
    } else if (lettre === 'p') {
      nouvelPhrase += String(Calculate(16)) + ' ';
    } else if (lettre === 'q') {
      nouvelPhrase += String(Calculate(17)) + ' ';
    } else if (lettre === 'r') {
      nouvelPhrase += String(Calculate(18)) + ' ';
    } else if (lettre === 's') {
      nouvelPhrase += String(Calculate(19)) + ' ';
    } else if (lettre === 't') {
      nouvelPhrase += String(Calculate(20)) + ' ';
    } else if (lettre === 'u') {
      nouvelPhrase += String(Calculate(21)) + ' ';
    } else if (lettre === 'v') {
      nouvelPhrase += String(Calculate(22)) + ' ';
    } else if (lettre === 'w') {
      nouvelPhrase += String(Calculate(23)) + ' ';
    } else if (lettre === 'x') {
      nouvelPhrase += String(Calculate(24)) + ' ';
    } else if (lettre === 'y') {
      nouvelPhrase += String(Calculate(25)) + ' ';
    } else if (lettre === 'z') {
      nouvelPhrase += String(Calculate(26)) + ' ';
    } else if (lettre === ' ') {
      nouvelPhrase += ' ~ ';
    } else {
      nouvelPhrase += ` {${lettre}} `
    }
  }

  putBotMessageHtml(nouvelPhrase)
}
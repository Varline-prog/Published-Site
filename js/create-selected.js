let file_indent_name;
let step = 0
let indent = 0
let tour = 0
let end = false

function addData() {
  let recto = document.querySelector('.js-recto').value
  let verso = document.querySelector('.js-verso').value


  pocket.forEach((value) => {
    if (value.name === file_indent_name) {
      value.packet.push(
        {recto: recto, verso: verso}
      )
    }
  })

  console.log(pocket)
  saveData()
  console.log(pocket)
  showChanges(recto, verso)
  recto = document.querySelector('.js-recto').value = ""
  verso = document.querySelector('.js-verso').value = ""
}

function saveData() {
  localStorage.setItem("pocket", JSON.stringify(pocket))
}

function queryQuerey() {
  document.querySelector('.body').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addData()
    }
  })
  document.querySelector('.js-ajouter').addEventListener('click', addData)
  document.querySelector('.js-supprimer').addEventListener('click', supprimer)
}

function nextCart() {
  pocket.forEach((value) => {
    if (value.name === file_indent_name) {
      const max = value.packet.length * 2
      if (tour >= max) {
        end = true
        const func = (num) => {
          document.querySelector('.js-recto-txt').innerHTML = `Retour au menu dans: ${num}`
        }

        let i=5
        setInterval(() => {
          func(i)
          i--
          if (i === 0) {
            setTimeout(() => {
              window.location.href = "index2.html"
            }, 1400)
          }
        }, 1000);
      }
      if (!end) {
        if (step === 0) {

          setTimeout(() => {
            document.querySelector('.js-recto-txt').innerHTML = value.packet[indent].recto
            step += 1
          }, 400)
  
        } else if (step === 1) {
          setTimeout(() => {
            document.querySelector('.js-recto-txt').innerHTML = value.packet[indent].verso
            step += 1
          }, 400)
  
        } else if (step === 2) {
          setTimeout(() => {
            step = 1
            indent += 1
            document.querySelector('.js-recto-txt').innerHTML = value.packet[indent].recto
          }, 400)
  
        }
        tour += 1
      }
    }
  })


}

function showChanges(recto, verso) {
  document.querySelector('.js-recto-txt').innerHTML = recto
  document.querySelector('.js-verso-txt').innerHTML = verso
}

function supprimer() {
  if (document.querySelector('.right').classList.contains('center')) {
    document.querySelector('.js-supprimer').innerHTML = 'Supprimer'
    document.querySelector('.right').classList.remove('center');
    document.querySelector('.right').innerHTML = `
      <div class="right__flex">
        <div class="div1-remodel">
          <p class="js-recto-txt">Ready !</p>
        </div>
        <div class="div1-remodel">
          <p class="js-verso-txt">Verso</p>
        </div>
      </div>
      <div class="div2">
        <button>Lancer</button>
      </div>
    `
  } else {
    document.querySelector('.js-supprimer').innerHTML = 'Annuler'
    document.querySelector('.right').classList.add('center')
    document.querySelector('.right').innerHTML = `
    <div action="#">
      <div class="file-div">
        <h2>Supprimer une carte</h2>
        <section class="user-file">
          <p>n°1</p>
          <p>Recto</p>
          <p>Verso</p>
        </section>
      </div>
    </div>
    `
  }
}


document.querySelector('.js-valider').addEventListener('click', () => {

  saveName()

  document.querySelector('.main').innerHTML = `
    <p class="title">Flash the V</p>
  
    <div class="centerBox">
      <div class="left">
        <div class="div1">
          <h2>Recto</h2>
          <input type="text" placeholder="ex: Bonjour !" class="js-recto input">
        </div>
  
        <div class="div1">
          <h2>Verso</h2>
          <input type="text" placeholder="ex: Good morning !" class="js-verso input">
        </div>
        <div class="div2">
          <button class="js-ajouter">Ajouter</button>
          <button class="js-supprimer">Supprimer</button>
        </div>
      </div>
      <div class="right">
        <div class="right__flex">
          <div class="div1-remodel">
            <p class="js-recto-txt">Recto</p>
          </div>
          <div class="div1-remodel">
            <p class="js-verso-txt">Verso</p>
          </div>
        </div>
        <div class="div2">
          <!-- <form action="./play.html"> -->
          <button class="js-play">Lancer</button>
          <!-- </form> -->
        </div>
      </div>
    </div>
  `
  queryQuerey()

  document.querySelector('.js-play').addEventListener("click", () => {
  document.querySelector('.main').innerHTML =  `
  <p class="title">${file_indent_name}</p>

  <div class="div1-remodel">
    <p class="js-recto-txt">Recto</p>
  </div>

  <div class="div2-btn">
    <button class="play">Tourner</button>
  </div>
  `

  let temps;

  document.querySelector('.play').addEventListener('click', () => {
    document.querySelector('.div1-remodel').classList.add('animation')
    document.querySelector('.js-recto-txt').classList.add('animation')
    nextCart()
    clearTimeout(temps)
    temps = setTimeout(() => {
      document.querySelector('.div1-remodel').classList.remove('animation')
      document.querySelector('.js-recto-txt').classList.remove('animation')
    }, 730)
  })

})
  
})

function saveName() {
  file_indent_name = document.querySelector('.name-input').value
  pocket.push({
    name: file_indent_name,
    packet: []
  })
}
let pocket = JSON.parse(localStorage.getItem("pocket"))
console.log(pocket)
let file_indent_name;
let step = 0
let indent = 0
let tour = 0
let end = false
let changeBack = true
let nimero = 0 

function addData() {
  let recto = document.querySelector('.js-recto').value
  let verso = document.querySelector('.js-verso').value

  if (recto !== "" && verso !== "") {
    pocket.forEach((value) => {
      if (value.name === file_indent_name) {
        value.packet.push(
          {recto: recto, verso: verso}
        )
      }
    })
  
    // console.log(pocket)
    saveData()
    // console.log(pocket)
    showChanges(recto, verso)
    recto = document.querySelector('.js-recto').value = ""
    verso = document.querySelector('.js-verso').value = ""
  }
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

  document.querySelector('.js-play').addEventListener("click", () => {
    document.querySelector('.main').innerHTML =  `
      <p class="title">${file_indent_name}</p>

      <div class="div1-remodel">
        <p class="js-recto-txt">Clique sur Tourner 👇</p>
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
          }, 340)
  
        } else if (step === 1) {
          setTimeout(() => {
            document.querySelector('.js-recto-txt').innerHTML = value.packet[indent].verso
            step += 1
          }, 340)
  
        } else if (step === 2) {
          setTimeout(() => {
            step = 1
            indent += 1
            document.querySelector('.js-recto-txt').innerHTML = value.packet[indent].recto
          }, 340)
  
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
  console.log(changeBack)
  if (document.querySelector('.right').classList.contains('center')) {
      if (changeBack === true) {
        document.querySelector('.js-supprimer').innerHTML = 'Supprimer'
        document.querySelector('.right').classList.remove('center');
        document.querySelector('.right').innerHTML = `
          <div class="right__flex">
            <div class="div1-remodel">
              <p class="js-recto-txt">Recto</p>
            </div>
            <div class="div1-remodel">
              <p class="js-verso-txt">Verso</p>
            </div>
          </div>
          <div class="div2">
            <button class="js-play">Lancer</button>
          </div>
        `
        document.querySelector('.js-play').addEventListener("click", () => {
          document.querySelector('.main').innerHTML =  `
            <p class="title">${file_indent_name}</p>

            <div class="div1-remodel">
              <p class="js-recto-txt">Clique sur Tourner 👇</p>
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
      }
  } else {
    let html = '';
    
    document.querySelector('.js-supprimer').innerHTML = 'Annuler'
    document.querySelector('.right').classList.add('center')
    document.querySelector('.right').innerHTML = `
    <div action="#">
      <div class="file-div">
        <h2>Supprimer une carte</h2>
        
      </div>
    </div>
    `

    pocket.forEach((value, i) => {
      if (value.name === file_indent_name) {
        pocket[i].packet.forEach((card) => {
          html += `
            <button class="user-file deleteBtn">
              <p>n°${i+=1}</p>
              <p>${card.recto}</p>
              <p>${card.verso}</p>
            </button>
          `
        })
        return
      }
    })

    document.querySelector('.file-div').innerHTML += html
    document.querySelectorAll('.deleteBtn').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        console.log('DELETE THAT THING: ' + i)
        vraimentSuprimer(i)
      })
    })
  }
}


function vraimentSuprimer(i) {
  let html = '';
  pocket.forEach((value) => {
    if (value.name === file_indent_name) {
      value.packet.splice(i, 1)
      console.log(pocket)
      saveData()
    }
  })

  document.querySelector('.right').innerHTML = `
    <div action="#">
      <div class="file-div">
        <h2>Supprimer une carte</h2>
        
      </div>
    </div>
    `

  pocket.forEach((value, i) => {
    if (value.name === file_indent_name) {
      pocket[i].packet.forEach((card) => {
        html += `
          <button class="user-file deleteBtn">
            <p>n°${i+=1}</p>
            <p>${card.recto}</p>
            <p>${card.verso}</p>
          </button>
        `
      })
      return
    }
  })
  document.querySelector('.file-div').innerHTML += html
    document.querySelectorAll('.deleteBtn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      console.log('DELETE THAT THING: ' + i)
      vraimentSuprimer(i)
    })
  })
  changeBack = false;
  supprimer()
  changeBack = true
}


document.querySelector('.js-valider').addEventListener('click', () => {
  charabiaDeLaSuite()
})

document.querySelector('.body').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && nimero === 0) {
    nimero++
    charabiaDeLaSuite()
  }
})

function charabiaDeLaSuite() {
   if (saveName() === true) {
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
       document.querySelector('.main').innerHTML = `
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
   }
}

function saveName() {
  file_indent_name = document.querySelector('.name-input').value
  if (file_indent_name !== '') {
    let boool = false
  
    pocket.forEach((value) => {
      if (value.name === file_indent_name) {
        console.log(value.name)
        boool = true
      }
    })
  
    if (boool === false) {
      pocket.push({
        name: file_indent_name,
        packet: []
      })
      return true
  
    } else {
      nimero = 0
      document.querySelector('.name-input').placeholder = 'CE NOM ÉTÉ DÉJA PRIS ⚠️'
      setTimeout(() => {
        document.querySelector('.name-input').placeholder = 'ex: Fichier2'
      }, 2000)
      file_indent_name = document.querySelector('.name-input').value = ''
      return false
    }
  } else {
    nimero = 0
  }
}
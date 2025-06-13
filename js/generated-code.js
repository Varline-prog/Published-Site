export const addElementToPocket = `
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

export const pageToPlay = `
  <div class="div1-remodel">
    <p class="js-recto-txt">Recto</p>
  </div>

  <div class="div2-btn">
    <button class="play">Tourner</button>
  </div>
  `
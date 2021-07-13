import "./styles.css"

function GameCard() {
  return /*html*/ `
    <div class="game-card-box">
      <div class="game-card" onclick="this.classList.toggle('is-flipped')">
        <figure class="game-card-face game-card-face-front">
          <img src="images/alura-pixel.png" alt="Logo da Alura" class="icon" />
        </figure>
        <figure class="game-card-face game-card-face-back">
          <img src="images/logo-javascript.png" alt="Logo da Javascript" class="icon" />
        </figure>
      </div>
    </div>
  
  `;
}



export default GameCard;
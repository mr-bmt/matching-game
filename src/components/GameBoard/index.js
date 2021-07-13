import "./styles.css";
import GameCard from "../GameCard";

function GameBoard(amountOfCards = 6) {
  const cardList = new Array(amountOfCards).fill(GameCard());

  return /*html*/ `
    <div class="game-board">
      <ul>
        ${createCardListItemsHtml(cardList)}
      </ul>
    </div>  
  `;
}

function createCardListItemsHtml(cardList) {
  return cardList.map(card => `<li>${card}</li>`).join('');
}

export default GameBoard;
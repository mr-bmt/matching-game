import "./styles.css";
import GameCard from "../../components/GameCard";

function GameBoard(amountOfCards = 6) {
  const cardList = new Array(amountOfCards).fill(GameCard());

  return /*html*/ `
    <section class="game-board">
      <ul>
        ${createCardListItemsHtml(cardList)}
      </ul>
    </section>  
  `;
}

function createCardListItemsHtml(cardList) {
  return cardList.map(card => `<li>${card}</li>`).join('');
}

export default GameBoard;
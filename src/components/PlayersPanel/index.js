import './styles.css';
import PlayerName from "../PlayerName";
import VersusSymbol from "../VersusSymbol";

function PlayersPanel(playerOne, playerTwo) {
  const $htmlPlayerOne = PlayerName(playerOne);
  const $htmlVersus = VersusSymbol();
  const $htmlPlayerTwo = PlayerName(playerTwo);

  return /*html*/ `
    <div class="players-panel">
      ${$htmlPlayerOne}
      ${$htmlVersus}
      ${$htmlPlayerTwo}
    </div>
  `;
}

export default PlayersPanel;
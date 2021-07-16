import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/settings/fonts.css";
import GameBoard from "./src/objects/GameBoard";
import PlayersPanel from "./src/components/PlayersPanel";

const $root = document.querySelector("#root");
const $htmlPlayersPanel = PlayersPanel("Bruno", "World");
const $htmlGameBoard = GameBoard();

$root.insertAdjacentHTML("beforeend", $htmlPlayersPanel);
$root.insertAdjacentHTML("beforeend", $htmlGameBoard);
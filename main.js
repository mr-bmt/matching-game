import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import GameCard from "./src/components/GameCard";

const $root = document.querySelector("#root");
const $htmlGameCard = GameCard();

$root.insertAdjacentHTML("beforeend", $htmlGameCard);
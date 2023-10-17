const selectedColors = JSON.parse(sessionStorage.getItem("playerColors"));
const shuffledColors = selectedColors.sort((a, b) => 0.5 - Math.random());
const gameBoard = document.getElementById("game-board");
const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const inputColor3 = document.getElementById("color3");
const inputColor4 = document.getElementById("color4");
inputColor1.style.backgroundColor = selectedColors[0];
inputColor2.style.backgroundColor = selectedColors[1];
inputColor3.style.backgroundColor = selectedColors[2];
inputColor4.style.backgroundColor = selectedColors[3];

const createBoard = () => {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("row");
    for (let z = 0; z < 4; z++) {
      const square = document.createElement("div");
      square.id = `squareColor-${i}-${z}`;
      square.classList.add("input-color");
      row.appendChild(square);
    }
    gameBoard.appendChild(row);
  }
};
createBoard();

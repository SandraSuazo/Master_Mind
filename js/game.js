let selectedRow = 0;
let selectedSquare = 0;
let selectedCircle = 0;

// CREACIÓN DE LA TABLA
const createBoard = () => {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("row");
    for (let z = 0; z < 4; z++) {
      const square = document.createElement("div");
      square.id = `squareColor-${i}-${z}`;
      square.classList.add("check-color");
      row.appendChild(square);
    }
    for (let y = 0; y < 4; y++) {
      const circle = document.createElement("div");
      circle.id = `circleColor-${i}-${y}`;
      circle.classList.add("check-circle");
      row.appendChild(circle);
    }
    gameBoard.appendChild(row);
  }
};
createBoard();

// RELLENAR TABLA Y CORRECCIÓN
const addColor = (color) => {
  const square = document.getElementById(
    `squareColor-${selectedRow}-${selectedSquare}`
  );
  square.style.backgroundColor = color;
  const circle = document.getElementById(
    `circleColor-${selectedRow}-${selectedCircle}`
  );
  if (color === shuffledColors[selectedSquare]) {
    circle.style.backgroundColor = "#00FFFF";
  } else {
    circle.style.backgroundColor = "#FB44FF";
  }
  selectedSquare += 1;
  selectedCircle += 1;
  if (selectedSquare === 4) {
    selectedRow += 1;
    selectedSquare = 0;
    selectedCircle = 0;
  }
};

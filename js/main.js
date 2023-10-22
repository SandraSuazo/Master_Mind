// GUARDADO DEL NOMBRE O ALERTA
const savePlayerName = () => {
  const playerName = document.getElementById("input-name").value;
  if (!playerName) {
    alert("Por favor, introduce tu nombre.");
    return false;
  }
  saveToSessionStorage("playerName", playerName);
  return true;
};

// GUARDADO DE COLORES O ALERTA
const savePlayerColors = () => {
  const playerColors = [];
  const playerColor1 = document.getElementById("player-color1").value;
  const playerColor2 = document.getElementById("player-color2").value;
  const playerColor3 = document.getElementById("player-color3").value;
  const playerColor4 = document.getElementById("player-color4").value;
  if (
    playerColor1 === "#000000" ||
    playerColor2 === "#000000" ||
    playerColor3 === "#000000" ||
    playerColor4 === "#000000"
  ) {
    alert("Por favor, seleciona 4 colores.");
    return false;
  }
  playerColors.push(playerColor1, playerColor2, playerColor3, playerColor4);
  saveToSessionStorage("playerColors", playerColors);
  return true;
};

// SALUDO JUGADOR
const getPlayerName = () => {
  const playerName = sessionStorage.getItem("playerName");
  const playerText = document.getElementById("text-game");
  const textGame = `Busca la combinación correcta de colores. ¡Muchas suerte ${playerName}!`;
  playerText.textContent = textGame;
};
getPlayerName();

// IMPRESIÓN DE LOS 4 COLORES ELEGIDOS
const getPlayerColors = () => {
  const selectedColors = sessionStorage.getItem("playerColors").split(",");
  for (let i = 1; i <= 4; i++) {
    const gameColor = document.getElementById(`color${i}`);
    gameColor.style.backgroundColor = selectedColors[i - 1];
    gameColor.addEventListener("click", () => {
      addColor(selectedColors[i - 1]);
    });
  }
};
getPlayerColors();

// BARAJEADO DE LOS COLORES
const selectedColors2 = sessionStorage.getItem("playerColors").split(",");
const shuffledColors = selectedColors2.sort((a, b) => 0.5 - Math.random());

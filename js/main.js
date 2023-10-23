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
  const playerColors = [
    document.getElementById("player-color1").value,
    document.getElementById("player-color2").value,
    document.getElementById("player-color3").value,
    document.getElementById("player-color4").value,
    document.getElementById("player-color5").value,
  ];
  if (playerColors.includes("#000000")) {
    alert("Por favor, selecciona 5 colores.");
    return false;
  }
  saveToSessionStorage("playerColors", playerColors);
  return true;
};

// SALUDO JUGADOR
const getPlayerName = () => {
  const playerName = sessionStorage.getItem("playerName");
  const playerText = document.getElementById("text-game");
  const textGame = `Jugador: ${playerName}`;
  playerText.textContent = textGame;
};
getPlayerName();

// IMPRESIÓN DE LOS 5 COLORES ELEGIDOS
const getPlayerColors = () => {
  const selectedColors = sessionStorage.getItem("playerColors").split(",");
  for (let i = 0; i < selectedColors.length; i++) {
    const gameColor = document.getElementById(`color${i}`);
    gameColor.style.backgroundColor = selectedColors[i];
    gameColor.addEventListener("click", () => {
      addColor(selectedColors[i]);
    });
  }
};
getPlayerColors();

// BARAJEADO DE LOS COLORES
const selectedColors = sessionStorage.getItem("playerColors").split(",");
let shuffledColors = selectedColors.sort((a, b) => 0.5 - Math.random());
shuffledColors = shuffledColors.splice(0, 4);

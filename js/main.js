const initGame = () => {
  const isPlayerNameSaved = savePlayerName();
  const isPlayerColorsSaved = savePlayerColors();
  if (isPlayerNameSaved && isPlayerColorsSaved) {
    navigator("btn-game", "./game.html");
  }
};

const savePlayerName = () => {
  const playerName = document.getElementById("input-name").value;
  if (!playerName) {
    alert("Por favor, introduce tu nombre.");
    return false;
  }
  saveToSessionStorage("playerName", playerName);
  return true;
};

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

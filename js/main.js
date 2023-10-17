const initGame = () => {
  const isPlayerNameSaved = savePlayerName();
  const isPlayerColorsSaved = savePlayerColors();
  if (isPlayerNameSaved && isPlayerColorsSaved) {
    navigator("btnPlay", "./game.html");
  }
};

const savePlayerName = () => {
  const playerName = document.getElementById("playerName").value;
  if (!playerName) {
    alert("Por favor, introduce un nombre.");
    return false;
  }
  saveToSessionStorage("playerName", playerName);
  return true;
};

const savePlayerColors = () => {
  const playerColors = [];
  const playerColor1 = document.getElementById("playerColor1").value;
  const playerColor2 = document.getElementById("playerColor2").value;
  const playerColor3 = document.getElementById("playerColor3").value;
  const playerColor4 = document.getElementById("playerColor4").value;
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

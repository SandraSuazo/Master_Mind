// NAVEGACIÓN ENTRE PÁGINAS
const navigator = (buttonId, route) => {
  const btn = document.getElementById(buttonId);
  btn.href = route;
};

// BOTÓN DE JUGAR DE LA PÁGINA DE DATA
const initGame = () => {
  const isPlayerNameSaved = savePlayerName();
  const isPlayerColorsSaved = savePlayerColors();
  if (isPlayerNameSaved && isPlayerColorsSaved) {
    navigator("btn-game", "./game.html");
  }
};

// GUARDADO DE DATOS EN LA SESIÓN
const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value.toString());
};

// PLAYER NAME
const saveName = () => {
  let name = document.getElementById("playerName").value;
  if (name == "") {
    sessionStorage.setItem("name", "Jugador 1");
  } else {
    sessionStorage.setItem("name", name);
  }
};
let name = sessionStorage.getItem("playerName");

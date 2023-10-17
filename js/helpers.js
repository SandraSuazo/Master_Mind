const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const navigator = (buttonId, route) => {
  const btn = document.getElementById(buttonId);
  btn.href = route;
};

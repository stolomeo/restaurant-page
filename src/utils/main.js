export const createMain = () => {
  const main = document.createElement("main");
  return main;
};

export const selectMain = () => {
  const main = document.querySelector("main");
  return main;
};

export const clearMain = () => {
  const main = selectMain();
  main.textContent = "";
  return main;
};

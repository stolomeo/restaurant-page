import "../style.css";
import { clearMain } from "../utils/main";
import { menuOptionsList } from "../utils/menuOptions";

const createMenuContainer = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  return menuContainer;
};

const createMenuCard = () => {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-item");
  return menuCard;
};

const createMenuImg = (src) => {
  const menuImg = document.createElement("img");
  menuImg.src = src;
  return menuImg;
};

const createMenuTitle = (title) => {
  const menuTitle = document.createElement("h3");
  menuTitle.textContent = title;
  return menuTitle;
};

const menuOptions = menuOptionsList.map((menuOption) => {
  const menuImg = createMenuImg(menuOption.image);
  const menuTitle = createMenuTitle(menuOption.title);
  const menuCard = createMenuCard();
  menuCard.append(menuImg, menuTitle);
  return menuCard;
});

const appendMenuContainer = () => {
  const menuContainer = createMenuContainer();
  menuContainer.append(...menuOptions);
  return menuContainer;
};

const appendMenuToMain = () => {
  const main = clearMain();
  main.appendChild(appendMenuContainer());
  return main;
};

export default appendMenuToMain;

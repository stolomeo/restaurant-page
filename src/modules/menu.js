import "../style.css";
import { Container } from "../utils/elementClasses";
import { clearMain } from "../utils/main";
import { menuOptionsList } from "../utils/menuOptions";

const menuContainer = new Container("menuContainer", "menu-container", "div");

const menuCard = new Container("menuCard", "menu-item", "div");

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
  const menuCardEl = menuCard.createContainer();
  menuCardEl.append(menuImg, menuTitle);
  return menuCardEl;
});

const appendMenuContainer = () => {
  const menuContainerEl = menuContainer.createContainer();
  menuContainerEl.append(...menuOptions);
  return menuContainerEl;
};

const appendMenuToMain = () => {
  const main = clearMain();
  main.appendChild(appendMenuContainer());
  return main;
};

export default appendMenuToMain;

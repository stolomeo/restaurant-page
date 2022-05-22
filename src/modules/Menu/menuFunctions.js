import "../../style.css";
import { clearMain } from "../../utils/main";

import { menuCard, menuContainerEl } from "./menuElements";
import { menuOptionsList } from "./menuOptionsList";

export const createMenuTitle = (title) => {
  const menuTitle = document.createElement("h3");
  menuTitle.textContent = title;
  return menuTitle;
};

export const createMenuImg = (src) => {
  const menuImg = document.createElement("img");
  menuImg.src = src;
  return menuImg;
};

export const menuOptions = menuOptionsList.map((menuOption) => {
  const menuImg = createMenuImg(menuOption.image);
  const menuTitle = createMenuTitle(menuOption.title);
  const menuCardEl = menuCard.createContainer();
  menuCardEl.append(menuImg, menuTitle);
  menuContainerEl.append(menuCardEl);
  return menuCardEl;
});

export const createMenu = () => {
  menuContainerEl.append(...menuOptions);
  return menuContainerEl;
};

export const loadMenu = () => {
  const main = clearMain();
  main.append(createMenu());
  return main;
};

import { selectMain } from "../../utils/main";
import { menuCardEl, menuContainerEl } from "./menuElements";
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
  menuCardEl.append(menuImg, menuTitle);
  return menuCardEl;
});

export const createMenu = () => {
  menuContainerEl.append(...menuOptions);
  return menuContainerEl;
};

export const loadMenu = () => {
  const main = selectMain();
  main.append(createMenu());
  return main;
};

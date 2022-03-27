import "./style.css";
import Trifecta from "./images/trifecta.png";
import theTraditional from "./images/the-traditional.png";

const menuLoad = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const firstItem = createMenuItem(
    "menuItem1",
    "trifectaImg",
    Trifecta,
    "Tri-fecta"
  );
  const secondItem = createMenuItem(
    "menuItem2",
    "theTraditionalImg",
    theTraditional,
    "The Traditional"
  );
  firstItem.createDiv(menuContainer);

  const content = document.querySelector("#content");
  content.appendChild(menuContainer);
};

const createMenuItem = (menuItemDiv, menuItemImg, menuItemImgSrc, foodName) => {
  const createDiv = (menuContainer) => {
    menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    menuContainer.appendChild(menuItem1);

    return menuItemDiv;
  };
  const addMenuItemImg = () => {
    menuItemImg = new Image();
    menuItemImg.classList.add("menu-item-img");
    menuItemImg.src = menuItemImgSrc;
    menuItemDiv.appendChild(menuItemImg);
    return menuItemImg;
  };
  const addMenuItemName = () => {
    menuItemName = document.createElement("h3");
    menuItemName.classList.add("menu-item-name");
    menuItemName.textContent = foodName;
    menuItemName.appendChild(menuItemDiv);
    return menuItemName;
  };
  return {
    createDiv,
    addMenuItemImg,
    addMenuItemName,
  };
};

export default menuLoad;

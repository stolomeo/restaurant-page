import "./style.css";
import Trifecta from "./images/trifecta.png";
import theTraditional from "./images/the-traditional.png";

const menuLoad = () => {
  const content = document.querySelector("#content");

  const menuOptions = [
    {
      image: Trifecta,
      title: "Tri-fecta",
    },
    {
      image: theTraditional,
      title: "The Traditional",
    },
  ];

  const menuItems = menuOptions.map((menuOption) => {
    const menuItem = createMenuItem();
    menuItem.addImage(menuOption.image);
    menuItem.addTitle(menuOption.title);
    return menuItem.menuItemDiv;
  });

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.append(...menuItems);

  content.appendChild(menuContainer);
};

const createMenuItem = () => {
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-item");

  const addImage = (src) => {
    const menuImg = document.createElement("img");
    menuImg.src = src;
    menuItemDiv.append(menuImg);
  };
  const addTitle = (text) => {
    const menuTitle = document.createElement("h3");
    menuTitle.textContent = text;
    menuItemDiv.append(menuTitle);
  };

  return {
    menuItemDiv,
    addImage,
    addTitle,
  };
};

export default menuLoad;

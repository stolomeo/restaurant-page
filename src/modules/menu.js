import "../style.css";
import AvocadoToast from "./assets/avocado-toast.png";
import BuscuitsAndTurkeySausage from "./assets/biscuits-and-turkey-sausage.png";
import Chickichanga from "./assets/chickichanga.png";
import ElevatedEggSandwich from "./assets/elevated-egg-sandwich.png";
import FrenchToast from "./assets/french-toast.png";
import MultigrainPancake from "./assets/multigrain-pancake.png";
import SmokedSalmonBenedict from "./assets/smoked-salmon-benedict.png";
import Traditional from "./assets/the-traditional.png";
import Trifecta from "./assets/trifecta.png";

const menuLoad = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  const menuOptions = [
    {
      image: Trifecta,
      title: "Tri-fecta",
    },
    {
      image: Traditional,
      title: "The Traditional",
    },
    {
      image: AvocadoToast,
      title: "Avocado Toast",
    },
    {
      image: FrenchToast,
      title: "French Toast",
    },
    {
      image: MultigrainPancake,
      title: "Multigrain Pancake",
    },
    {
      image: ElevatedEggSandwich,
      title: "Elevated Egg Sandwich",
    },
    {
      image: BuscuitsAndTurkeySausage,
      title: "Buscuits & Turkey Sausage",
    },
    {
      image: Chickichanga,
      title: "Chickichanga",
    },
    {
      image: SmokedSalmonBenedict,
      title: "Smoked SalmonB enedict",
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

  main.appendChild(menuContainer);
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

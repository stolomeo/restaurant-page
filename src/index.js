import appendHomeToMain from "./modules/home";
import aboutLoad from "./modules/about";
import appendMenuToMain from "./modules/menu";
import { createMain } from "./utils/main";
import appendNavToHeader from "./modules/header";

const createHeader = () => {
  const headerEl = document.createElement("header");

  const headerLeftEl = document.createElement("div");
  headerLeftEl.classList.add("header-left");
  headerEl.appendChild(headerLeftEl);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = "Boomin` Breakfast";
  headerLeftEl.appendChild(titleDiv);

  const iconEl = document.createElement("img");
  iconEl.classList.add("header-img");
  iconEl.src = PancakeIcon;
  headerLeftEl.appendChild(iconEl);

  const nav = createNav();
  headerEl.appendChild(nav);
  return headerEl;
};

const content = document.querySelector("#content");
content.append(appendNavToHeader());

content.append(createMain());
const setActiveButton = () => {
  let buttons = document.querySelectorAll(".nav button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      resetBtns();
      button.classList.add("active");
    });
  });
  return buttons;
};

const resetBtns = () => {
  setActiveButton().forEach((button) => {
    button.classList.remove("active");
  });
};

appendHomeToMain();

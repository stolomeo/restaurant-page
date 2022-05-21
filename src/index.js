import loadHome from "./modules/home";
import menuLoad from "./modules/menu";
import aboutLoad from "./modules/about";
import PancakeIcon from "./modules/assets/pancake-french-svgrepo-com.svg";

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

const createNav = () => {
  const navEl = document.createElement("nav");
  navEl.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuBtn);
    menuLoad();
  });
  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About";
  aboutBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(aboutBtn);
    aboutLoad();
  });

  navEl.append(homeBtn, menuBtn, aboutBtn);
  return navEl;
};

const content = document.querySelector("#content");
content.append(createHeader());

const createMain = () => {
  const main = document.createElement("main");
  return main;
};

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

loadHome();

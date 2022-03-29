import homeLoad from "./home";
import menuLoad from "./menu";
import aboutLoad from "./about";

const createHeader = () => {
  const headerEl = document.createElement("header");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = "Boomin` Breakfast";
  headerEl.appendChild(titleDiv);

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
    homeLoad();
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

console.log(resetBtns());
homeLoad();

import appendHomeToMain from "./modules/home";
import { createMain } from "./utils/main";
import appendNavToHeader from "./modules/header";
import { navBtns } from "./modules/nav";

const content = document.querySelector("#content");
content.append(appendNavToHeader());
content.append(createMain());

export const selectButtons = () => {
  const buttons = document.querySelectorAll(".nav button");
  return buttons;
};

navBtns.forEach((btn) => {
  btn.handleClick();
});

appendHomeToMain();

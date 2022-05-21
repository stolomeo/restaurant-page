import { createHeader } from "./modules/Header/headerFunctions";
import { loadHome } from "./modules/Home/homeFunctions";
import { navBtns } from "./modules/Nav/navElements";
import { createMain } from "./utils/main";

const content = document.querySelector("#content");
content.append(createHeader(), createMain());

navBtns.forEach((btn) => {
  btn.handleClick();
});

loadHome();

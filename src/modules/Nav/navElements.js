import { Container } from "../../utils/elementClass";
import { loadAbout } from "../About/aboutFunctions";
import { loadHome } from "../Home/homeFunctions";
import { loadMenu } from "../Menu/menuFunctions";
import { navBtn } from "./navBtnClass";

const navContainer = new Container("navContainer", "nav", "nav");
const navHomeBtn = new navBtn("navHomeBtn", "Home", loadHome);
const navMenuBtn = new navBtn("navMenuBtn", "Menu", loadMenu);
const navAboutBtn = new navBtn("navAboutBtn", "About", loadAbout);

const navContainerEl = navContainer.createContainer();
const navHomeBtnEl = navHomeBtn.createBtn();
const navMenuBtnEl = navMenuBtn.createBtn();
const navAboutBtnEl = navAboutBtn.createBtn();
export const navBtns = [navHomeBtn, navMenuBtn, navAboutBtn];

export { navContainerEl, navHomeBtnEl, navMenuBtnEl, navAboutBtnEl };

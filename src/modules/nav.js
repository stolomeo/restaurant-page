import appendHomeToMain from "./home";
import appendMenuToMain from "./menu";
import appendAboutToMain from "./about";
import { selectButtons } from "..";

const createNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  return nav;
};

const removeButtonActive = () => {
  const buttons = selectButtons();
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const setButtonActive = (btn) => {
  btn.classList.add("active");
};

class navBtn {
  constructor(element, textContent, func) {
    this.element = element;
    this.textContent = textContent;
    this.func = func;
  }
  createBtn() {
    this.element = document.createElement("button");
    this.element.textContent = this.textContent;
    return this.element;
  }
  handleClick() {
    this.element.addEventListener("click", (e) => {
      const { classList } = e.target;
      if (classList.contains("active")) return;
      removeButtonActive();
      setButtonActive(this.element);
      this.func();
    });
  }
}

const navHomeBtn = new navBtn("navHomeBtn", "Home", appendHomeToMain);
const navMenuBtn = new navBtn("navMenuBtn", "Menu", appendMenuToMain);
const navAboutBtn = new navBtn("navAboutBtn", "About", appendAboutToMain);

export const navBtns = [navHomeBtn, navMenuBtn, navAboutBtn];

const appendNav = () => {
  const nav = createNav();
  nav.append(
    navHomeBtn.createBtn(),
    navMenuBtn.createBtn(),
    navAboutBtn.createBtn()
  );
  return nav;
};

export default appendNav;

import appendHomeToMain from "./home";
import appendMenuToMain from "./menu";
import appendAboutToMain from "./about";

const createNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  return nav;
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
      setActiveButton(this.element);
      this.func();
    });
  }
}

const navHomeBtn = new navBtn("navHomeBtn", "Home", appendHomeToMain);
const navMenuBtn = new navBtn("navMenuBtn", "Menu", appendMenuToMain);
const navAboutBtn = new navBtn("navHomeBtn", "Home", appendAboutToMain);

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

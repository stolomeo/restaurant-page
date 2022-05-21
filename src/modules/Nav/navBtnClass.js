import { removeButtonActive, setButtonActive } from "./navFunctions";

export class navBtn {
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

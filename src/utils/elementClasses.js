export class Container {
  constructor(name, type, className) {
    this.name = name;
    this.type = type;
    this.className = className;
  }
  createContainer() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    return this.name;
  }
}

export class Img {
  constructor(name, source) {
    this.name = name;
    this.source = source;
  }
  createImg() {
    this.name = document.createElement("img");
    this.name.src = this.source;
    return this.name;
  }
}

export class TextElement {
  constructor(name, type, className, textContent) {
    this.name = name;
    this.type = type;
    this.className = className;
    this.textContent = textContent;
  }
  createTextElement() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    this.name.textContent = this.textContent;
    return this.name;
  }
}

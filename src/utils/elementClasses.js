export class Container {
  constructor(name, className, type) {
    this.name = name;
    this.className = className;
    this.type = type;
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
  constructor(name, className, type, textContent) {
    this.name = name;
    this.className = className;
    this.type = type;
    this.textContent = textContent;
  }
  createTextElement() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    this.name.textContent = this.textContent;
    return this.name;
  }
}

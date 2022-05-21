export class Element {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  createElement() {
    this.name = document.createElement(this.type);
    return this.name;
  }
}

export class Container extends Element {
  constructor(name, className, type) {
    super(name, type);
    this.className = className;
  }
  createContainer() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    return this.name;
  }
}

export class Img extends Element {
  constructor(name, source) {
    super(name);
    this.source = source;
  }
  createImg() {
    this.name = document.createElement("img");
    this.name.src = this.source;
    return this.name;
  }
}

export class TextElement extends Container {
  constructor(name, className, type, textContent) {
    super(name, className, type);
    this.textContent = textContent;
  }
  createTextElement() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    this.name.textContent = this.textContent;
    return this.name;
  }
}

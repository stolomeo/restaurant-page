import { Container, Element, Img, TextElement } from "../../utils/elementClass";
import PancakeIcon from "../../assets/pancake-french.svg";

const headerContainer = new Element("header", "header");
const headerLeft = new Container("headerleft", "header-left", "div");
const headerTitle = new TextElement(
  "headerTitle",
  "title",
  "div",
  "Boomin` Breakfast"
);
const headerIcon = new Img("headerIcon", PancakeIcon);

const headerContainerEl = headerContainer.createElement();
const headerLeftEl = headerLeft.createContainer();
const headerTitleEl = headerTitle.createTextElement();
const headerIconEl = headerIcon.createImg();

export { headerContainerEl, headerLeftEl, headerTitleEl, headerIconEl };

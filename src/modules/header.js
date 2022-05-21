import createNav from "./nav";
import PancakeIcon from "../assets/pancake-french-svgrepo-com.svg";
import { Container, Element, Img, TextElement } from "../utils/elementClasses";

const header = new Element("header", "header");
const headerLeft = new Container("headerleft", "header-left", "div");
const headerTitle = new TextElement(
  "headerTitle",
  "title",
  "div",
  "Boomin` Breakfast"
);
const headerIcon = new Img("headerIcon", PancakeIcon);

const appendHeaderLeft = () => {
  const headerLeftEl = headerLeft.createContainer();
  headerLeftEl.append(headerTitle.createTextElement(), headerIcon.createImg());
  return headerLeft;
};

const appendHeaderContainer = () => {
  const headerContainer = header.createElement();
  const headerLeftEl = appendHeaderLeft();
  headerContainer.append(headerLeftEl);
  return headerContainer;
};

const appendNavToHeader = () => {
  const headerContainer = appendHeaderContainer();
  const nav = createNav();
  headerContainer.appendChild(nav);
  return headerContainer;
};

export default appendNavToHeader;

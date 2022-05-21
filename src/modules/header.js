import createNav from "./nav";
import PancakeIcon from "../assets/pancake-french-svgrepo-com.svg";

const createHeaderContainer = () => {
  const header = document.createElement("header");
  return header;
};

const createHeaderLeft = () => {
  const headerLeft = document.createElement("div");
  headerLeft.classList.add("header-left");
  return headerLeft;
};

const createHeaderTitle = () => {
  const headerTitle = document.createElement("div");
  headerTitle.classList.add("title");
  headerTitle.textContent = "Boomin` Breakfast";
  return headerTitle;
};

const createHeaderIcon = () => {
  const headerIcon = document.createElement("img");
  headerIcon.classList.add("header-img");
  headerIcon.src = PancakeIcon;
  return headerIcon;
};

const appendHeaderLeft = () => {
  const headerLeft = createHeaderLeft();
  const headerTitle = createHeaderTitle();
  const headerIcon = createHeaderIcon();
  headerLeft.append(headerTitle, headerIcon);
  return headerLeft;
};
const appendHeaderContainer = () => {
  const headerContainer = createHeaderContainer();
  const headerLeft = appendHeaderLeft();
  headerContainer.appendChild(headerLeft);
  return headerContainer;
};

const appendNavToHeader = () => {
  const headerContainer = appendHeaderContainer();
  const nav = createNav();
  headerContainer.appendChild(nav);
  return headerContainer;
};

export default appendNavToHeader;

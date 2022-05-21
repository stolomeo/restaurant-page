import { Container } from "../../utils/elementClass";

const menuContainer = new Container("menuContainer", "menu-container", "div");
const menuCard = new Container("menuCard", "menu-item", "div");
const menuContainerEl = menuContainer.createContainer();
const menuCardEl = menuCard.createContainer();

export { menuContainerEl, menuCardEl };

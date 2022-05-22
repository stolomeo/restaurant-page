import { Container, Element, Img } from "../../utils/elementClass";
import HeaderLogo from "../../assets/Barista-transparent.png";

const headerContainer = new Element("header", "header");
const headerLeft = new Container("headerleft", "header-left", "div");
const headerLogo = new Img("headerLogo", HeaderLogo);

const headerContainerEl = headerContainer.createElement();
const headerLeftEl = headerLeft.createContainer();
const headerLogoEl = headerLogo.createImg();

export { headerContainerEl, headerLeftEl, headerLogoEl };

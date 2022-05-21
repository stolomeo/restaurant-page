import Pancake from "../../assets/pancake-blueberry.jpg";
import { Container, Img, TextElement } from "../../utils/elementClass";

const homeContainer = new Container("homeContainer", "home-container", "div");
const homeImg = new Img("homeImg", Pancake);
const homeDescription = new TextElement(
  "homeDescrption",
  "home-description",
  "h2",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`
);

const homeContainerEl = homeContainer.createContainer();
const homeImgEl = homeImg.createImg();
const homeDescriptionEl = homeDescription.createTextElement();

export { homeContainerEl, homeImgEl, homeDescriptionEl };

import "../style.css";
import Pancake from "../assets/pancake-blueberry.jpg";
import { clearMain } from "../utils/main";
import { Container, Img, TextElement } from "../utils/elementClasses";

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

const appendHomeItems = () => {
  const homeContainerEl = homeContainer.createContainer();
  homeContainerEl.append(
    homeImg.createImg(),
    homeDescription.createTextElement()
  );
  return homeContainerEl;
};

const appendHomeToMain = () => {
  const main = clearMain();
  main.appendChild(appendHomeItems());
};

export default appendHomeToMain;

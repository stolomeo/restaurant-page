import "../style.css";
import Pancake from "./assets/pancake-blueberry.jpg";

const createHomeContainer = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  return homeContainer;
};

const createHomeImg = () => {
  const homeImg = new Image();
  homeImg.src = Pancake;
  return homeImg;
};

const createHomeDescription = () => {
  const homeDescription = document.createElement("h2");
  homeDescription.classList.add("homeDescription");
  homeDescription.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`;
  return homeDescription;
};

const appendHomeItems = () => {
  const homeContainer = createHomeContainer();
  const homeImg = createHomeImg();
  const homeDescription = createHomeDescription();
  homeContainer.append(homeImg, homeDescription);
  return homeContainer;
};

const loadHome = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(appendHomeItems());
};

export default loadHome;

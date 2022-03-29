import "./style.css";
import BreakfastPic from "./images/breakfast-1.jpg";

const homeLayout = () => {
  const homeContainerDiv = document.createElement("div");
  homeContainerDiv.classList.add("home-container");

  const myImage = new Image();
  myImage.src = BreakfastPic;

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerHTML = "Welcome to Boomin' Breakfast!";

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`;

  homeContainerDiv.append(myImage, headline, description);

  return homeContainerDiv;
};

const homeLoad = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(homeLayout());
};

export default homeLoad;

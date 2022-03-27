import "./style.css";
import BreakfastPic from "./images/breakfast-1.jpg";

const homeLoad = () => {
  const homeContainerdiv = document.createElement("div");
  homeContainerdiv.classList.add("home-container");
  const myImage = new Image();
  myImage.src = BreakfastPic;
  homeContainerdiv.appendChild(myImage);

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerHTML = "Welcome to Boomin' Breakfast!";
  homeContainerdiv.appendChild(headline);

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`;
  homeContainerdiv.appendChild(description);

  const content = document.querySelector("#content");

  content.appendChild(homeContainerdiv);

  return homeContainerdiv;
};

export default homeLoad;

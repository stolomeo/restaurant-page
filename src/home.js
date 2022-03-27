import "./style.css";
import BreakfastPic from "./images/breakfast-1.jpg";

const homeLoad = () => {
  const content = document.querySelector("#content");

  const myImage = new Image();
  myImage.src = BreakfastPic;
  content.appendChild(myImage);

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerHTML = "Welcome to Boomin' Breakfast!";
  content.appendChild(headline);

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`;
  content.appendChild(description);

  return content;
};

export default homeLoad;

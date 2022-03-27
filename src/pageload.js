import "./style.css";
import BreakfastPic from "./breakfast-1.jpg";

const pageLoad = () => {
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
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  content.appendChild(description);

  return content;
};

export default pageLoad;

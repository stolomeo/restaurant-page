import homeLoad from "./home";

const createHeader = () => {
  const header = document.createElement("header");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = `Boomin' Breakfast`;
  header.appendChild(titleDiv);

  const navEl = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  navEl.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  navEl.appendChild(menuBtn);

  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About";
  navEl.appendChild(aboutBtn);

  header.appendChild(navEl);

  const content = document.querySelector("#content");
  content.appendChild(header);

  return header;
};
createHeader();
homeLoad();

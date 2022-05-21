import { clearMain } from "../../utils/main";
import { homeContainerEl, homeDescriptionEl, homeImgEl } from "./homeElements";

export const createHome = () => {
  homeContainerEl.append(homeImgEl, homeDescriptionEl);
  return homeContainerEl;
};

export const loadHome = () => {
  const main = clearMain();
  main.append(createHome());
  return main;
};

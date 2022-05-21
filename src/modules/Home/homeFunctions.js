import { clearMain } from "../../utils/main";
import { homeContainerEl, homeDescriptionEl, homeImgEl } from "./homeElements";

export const createHome = () => {
  return homeContainerEl.append(homeImgEl, homeDescriptionEl);
};

export const loadHome = () => {
  const main = clearMain();
  main.append(createHome());
  return main;
};

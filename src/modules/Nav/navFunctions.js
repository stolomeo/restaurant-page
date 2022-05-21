import { selectNavButtons } from "../../utils/selectNavButtons";
import {
  navAboutBtnEl,
  navContainerEl,
  navHomeBtnEl,
  navMenuBtnEl,
} from "./navElements";

export const setButtonActive = (btn) => {
  btn.classList.add("active");
};
export const removeButtonActive = () => {
  const buttons = selectNavButtons();
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

export const createNav = () => {
  navContainerEl.append(navHomeBtnEl, navMenuBtnEl, navAboutBtnEl);
  return navContainerEl;
};

import "../../style.css";
import { createNav } from "../Nav/navFunctions";
import {
  headerContainerEl,
  headerIconEl,
  headerLeftEl,
  headerTitleEl,
} from "./headerElements";

export const createHeaderLeft = () => {
  headerLeftEl.append(headerTitleEl, headerIconEl);
  return headerLeftEl;
};

export const createHeader = () => {
  headerContainerEl.append(createHeaderLeft(), createNav());
  return headerContainerEl;
};

import { createNav } from "../Nav/navFunctions";
import {
  headerContainerEl,
  headerLeftEl,
  headerLogoEl,
} from "./headerElements";

export const createHeaderLeft = () => {
  headerLeftEl.append(headerLogoEl);
  return headerLeftEl;
};

export const createHeader = () => {
  headerContainerEl.append(createHeaderLeft(), createNav());
  return headerContainerEl;
};

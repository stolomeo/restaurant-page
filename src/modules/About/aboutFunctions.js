import { clearMain } from "../../utils/main";
import {
  emailInput,
  formContainerEl,
  formHeaderEl,
  messageInput,
  nameInput,
  phoneInput,
  submitInput,
} from "./aboutElements";

export const createForm = () => {
  formContainerEl.append(
    nameInput,
    phoneInput,
    emailInput,
    messageInput,
    submitInput
  );
  return formContainerEl;
};

export const loadAbout = () => {
  const main = clearMain();
  main.append(formHeaderEl, createForm());
  return main;
};

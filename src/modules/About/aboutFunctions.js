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
  return formContainerEl.append(
    nameInput,
    phoneInput,
    emailInput,
    messageInput,
    submitInput
  );
};

export const loadAbout = () => {
  return clearMain().append(formHeaderEl, createForm());
};

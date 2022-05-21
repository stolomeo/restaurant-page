import {
  formConstructor,
  submitBtnConstructor,
} from "../../utils/aboutFormConstructor";
import { Container, TextElement } from "../../utils/elementClass";

const formHeader = new TextElement(
  "formHeader",
  "form-header",
  "h2",
  "CONTACT US"
);
const formContainer = new Container("formContainer", "form-container", "div");
const nameInput = formConstructor("input", "text", "userinfo", "Name: ");
const phoneInput = formConstructor("input", "number", "userinfo", "Phone No: ");
const emailInput = formConstructor(
  "input",
  "email",
  "userinfo",
  "Email Address: "
);
const messageInput = formConstructor(
  "textarea",
  "text",
  "userinfo",
  "Message: "
);
const submitInput = submitBtnConstructor("submit", "SUBMIT");

const formHeaderEl = formHeader.createTextElement();
const formContainerEl = formContainer.createContainer();

export {
  formHeaderEl,
  formContainerEl,
  nameInput,
  phoneInput,
  emailInput,
  messageInput,
  submitInput,
};

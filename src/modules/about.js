import "../style.css";
import { clearMain } from "../utils/main";

const formConstructor = (tagName, type, className, placeholder) => {
  let el = document.createElement(tagName);
  el.setAttribute("type", type);
  el.setAttribute("class", className);
  el.setAttribute("placeholder", placeholder);
  return el;
};

const submitBtnConstructor = (type, value) => {
  let el = document.createElement("input");
  el.setAttribute("type", type);
  el.setAttribute("value", value);
  return el;
};

const createFormHeader = () => {
  const formHeader = document.createElement("h2");
  formHeader.textContent = "CONTACT US";
  return formHeader;
};

const createFormContainer = () => {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  return formContainer;
};

const name = formConstructor("input", "text", "userinfo", "Name: ");
const phoneNumber = formConstructor(
  "input",
  "number",
  "userinfo",
  "Phone No: "
);
const email = formConstructor("input", "email", "userinfo", "Email Address: ");
const message = formConstructor("textarea", "text", "userinfo", "Message: ");
const submit = submitBtnConstructor("submit", "SUBMIT");

const appendFormContainer = () => {
  const formContainer = createFormContainer();
  formContainer.append(name, phoneNumber, email, message, submit);
  return formContainer;
};

const appendFormToMain = () => {
  const main = clearMain();
  const formHeader = createFormHeader();
  const formContainer = appendFormContainer();
  main.append(formHeader, formContainer);
};

export default appendFormToMain;

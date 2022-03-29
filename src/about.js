import "./style.css";

//Create Form

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

const aboutLoad = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  const formHeader = document.createElement("h2");
  const formContainerEl = document.createElement("div");

  const name = formConstructor("input", "text", "userinfo", "Name: ");
  const phoneNumber = formConstructor(
    "input",
    "number",
    "userinfo",
    "Phone No: "
  );
  const email = formConstructor(
    "input",
    "email",
    "userinfo",
    "Email Address: "
  );
  const message = formConstructor("textarea", "text", "userinfo", "Message: ");
  const submit = submitBtnConstructor("submit", "SUBMIT");

  formHeader.textContent = "CONTACT US";

  formContainerEl.setAttribute("class", "form-container");
  main.append(formHeader, formContainerEl);

  formContainerEl.append(name, phoneNumber, email, message, submit);
};

export default aboutLoad;

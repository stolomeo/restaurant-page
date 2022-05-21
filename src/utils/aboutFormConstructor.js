export const formConstructor = (tagName, type, className, placeholder) => {
  let el = document.createElement(tagName);
  el.setAttribute("type", type);
  el.setAttribute("class", className);
  el.setAttribute("placeholder", placeholder);
  return el;
};

export const submitBtnConstructor = (type, value) => {
  let el = document.createElement("input");
  el.setAttribute("type", type);
  el.setAttribute("value", value);
  return el;
};

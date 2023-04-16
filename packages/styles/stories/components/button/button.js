export const createButton = ({
  label,
  variant,
  size,
  disabled,
  square,
  link,
  onClick,
}) => {
  let btn = document.createElement("button");
  if (link) {
    btn = document.createElement("a");
    btn.setAttribute("href", "#");
  }
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  variant = variant === "default" ? "" : variant;
  square = square ? "square" : "";
  size = size === "normal" ? "" : size;
  btn.className = ["btn", variant, square, size]
    .filter((item) => !!item)
    .join(" ");

  if (disabled) {
    btn.disabled = true;
  }

  return btn;
};

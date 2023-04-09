export const createButton = ({
  label,
  variant,
  size,
  disabled,
  square,
  onClick,
}) => {
  const btn = document.createElement("button");
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

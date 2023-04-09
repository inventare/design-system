export const createButton = ({ label, variant, disabled, square, onClick }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  variant = variant === "default" ? "" : variant;
  square = square ? "square" : "";
  btn.className = ["btn", variant, square].filter((item) => !!item).join(" ");

  if (disabled) {
    btn.disabled = true;
  }

  return btn;
};

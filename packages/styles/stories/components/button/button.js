export const createButton = ({ label, variant, disabled, onClick }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  variant = variant === "default" ? "" : variant;
  btn.className = ["btn", variant].filter((item) => !!item).join(" ");

  if (disabled) {
    btn.disabled = true;
  }

  return btn;
};

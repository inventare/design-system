export const createSpinner = ({ color, size, width }) => {
  const spinner = document.createElement("div");

  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement("div");
    spinner.appendChild(div);
  }

  spinner.className = "spinner";
  if (!!color) {
    spinner.style.setProperty("--inventare-spinner-color", color);
  }
  if (!!size) {
    spinner.style.setProperty("--inventare-spinner-size", `${size}px`);
  }
  if (!!width) {
    spinner.style.setProperty("--inventare-spinner-width", `${width}px`);
  }

  return spinner;
};

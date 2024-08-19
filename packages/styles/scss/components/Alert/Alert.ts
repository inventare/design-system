export interface AlertProps {
  text: string;
  variant: string;
}

export const createAlert = ({
  text,
  variant = 'default'
}: AlertProps) => {
  const alert = document.createElement('div');
  alert.className = 'alert';
  alert.role = "alert"
  alert.innerHTML = text;

  if (variant !== 'default') {
    alert.classList.add(variant);
  }

  return alert;
};

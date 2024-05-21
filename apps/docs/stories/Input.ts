export interface InputProps {
  id: string;
  label: string;
  disabled?: boolean;
}

export const createInput = ({
  id,
  disabled,
  label,
}: InputProps) => {
  const container = document.createElement('div');
  container.className = 'form-control';

  const labelEl = document.createElement('label');
  labelEl.innerHTML = label;
  labelEl.setAttribute('for', id);

  const input = document.createElement('input');
  input.id = id;
  if (disabled) {
    input.disabled = true;
  }

  container.appendChild(labelEl);
  container.appendChild(input);

  return container;
};

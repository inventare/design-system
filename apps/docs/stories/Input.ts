export interface InputProps {
  id: string;
  label: string;
  disabled?: boolean;
  helperText?: string;
  variant?: 'default' | 'valid' | 'invalid';
}

export const createInput = ({
  id,
  disabled,
  label,
  helperText,
  variant = 'default',
}: InputProps) => {
  const container = document.createElement('div');
  container.className = 'form-control';
  if (variant === 'valid') {
    container.classList.add('valid');
  }
  if (variant === 'invalid') {
    container.classList.add('invalid');
  }

  const labelEl = document.createElement('label');
  labelEl.innerHTML = label;
  labelEl.htmlFor = id;

  const input = document.createElement('input');
  input.id = id;
  if (disabled) {
    input.disabled = true;
  }

  container.appendChild(labelEl);
  container.appendChild(input);

  if (helperText) {
    const helperTextEl = document.createElement('span');
    helperTextEl.innerHTML = helperText;
    helperTextEl.className = 'helper-text';

    container.appendChild(helperTextEl);
  }

  return container;
};

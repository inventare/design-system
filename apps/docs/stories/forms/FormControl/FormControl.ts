export interface FormControlProps {
  id: string;
  label: string;
  disabled?: boolean;
  helperText?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  variant?: 'default' | 'valid' | 'invalid';
  leftAdornment?: string;
  rightAdornment?: string;
}

export const renderFormControl = ({
  id,
  disabled,
  label,
  helperText,
  leftAdornment,
  rightAdornment,
  value = '',
  type = 'text',
  placeholder = '',
  variant = 'default',
}: FormControlProps) => {
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
  input.type = type;

  if (value) {
    input.value = value;
  }
  if (placeholder) {
    input.placeholder = placeholder;
  }
  if (disabled) {
    input.disabled = true;
  }

  container.appendChild(labelEl);

  if (leftAdornment || rightAdornment) {
    input.classList.add('default');

    const inputContainer = document.createElement('label');
    inputContainer.className = 'input'

    if (leftAdornment) {
      const left = document.createElement('div');
      left.className = 'adornment';
      left.innerHTML = leftAdornment;
      inputContainer.appendChild(left);
    }

    inputContainer.appendChild(input)

    if (rightAdornment) {
      const right = document.createElement('div');
      right.className = 'adornment';
      right.innerHTML = rightAdornment;
      inputContainer.appendChild(right);
    }

    container.appendChild(inputContainer)
  } else {
    container.appendChild(input);
  }

  if (helperText) {
    const helperTextEl = document.createElement('span');
    helperTextEl.innerHTML = helperText;
    helperTextEl.className = 'helper-text';

    container.appendChild(helperTextEl);
  }

  return container;
};

export interface SwitchProps {
  label: string;
  id: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  checked?: boolean;
  disabled?: boolean;
}

export const renderSwitch = ({
  id,
  label,
  checked,
  disabled,
  variant = 'primary',
}: SwitchProps) => {
  const div = document.createElement('div');
  div.className = 'form-switch';

  div.innerHTML = `
  <input
    class="form-check-input ${variant}"
    type="checkbox"
    id="${id}"
    ${checked && 'checked'}
    ${disabled && 'disabled'}
  >
  <label class="form-check-label" for="${id}">
    ${label}
  </label>
  `;

  return div;
}

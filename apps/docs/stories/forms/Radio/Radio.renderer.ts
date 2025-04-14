export interface RadioProps {
  label: string;
  id: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  checked?: boolean;
  disabled?: boolean;
}

export const renderRadio = ({
  id,
  label,
  checked,
  disabled,
  variant = 'primary',
}: RadioProps) => {
  const div = document.createElement('div');
  div.className = 'form-radio';

  div.innerHTML = `
  <input
    class="form-radio-input ${variant}"
    type="checkbox"
    id="${id}"
    ${checked && 'checked'}
    ${disabled && 'disabled'}
  >
  <label class="form-radio-label" for="${id}">
    ${label}
  </label>
  `;

  return div;
}

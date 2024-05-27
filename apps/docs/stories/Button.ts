export interface ButtonProps {
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  sizing?: 'default' | 'large' | 'small';
  square?: boolean;
  label?: string;
  onClick?: any;
}

export const createButton = ({
  variant = 'primary',
  disabled = false,
  sizing = 'default',
  square = false,
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label || 'Button';

  if (disabled) {
    btn.disabled = true;
  }

  btn.addEventListener('click', onClick);

  btn.className = [
    'btn',
    `${variant}`,
    `${sizing === 'default' ? '' : sizing}`,
    `${square ? 'square' : ''}`
  ].join(' ').trim();

  return btn;
};

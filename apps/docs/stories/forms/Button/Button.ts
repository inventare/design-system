export interface ButtonProps {
  variant?: 'primary' | 'danger' | 'ghost';
  disabled?: boolean;
  outline?: boolean;
  sizing?: 'default' | 'large' | 'small';
  label?: string;
  onClick?: any;
}

export const renderButton = ({
  variant = 'primary',
  disabled = false,
  outline = false,
  sizing = 'default',
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerHTML = label || 'Button';

  if (disabled) {
    btn.disabled = true;
  }

  btn.addEventListener('click', onClick);

  btn.className = [
    'btn',
    `${variant}`,
    `${sizing === 'default' ? '' : sizing}`,
    `${outline ? 'outline' : ''}`,
  ].join(' ').trim();

  return btn;
};

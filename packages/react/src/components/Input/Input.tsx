import { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  label: ReactNode;
};

export const Input = ({ id, label, className, ...props }: InputProps) => {
  const classes = clsx({
    [className || 'form-control']: true,
    'form-control': true,
  });

  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={classes}
        {...props}
      />
    </div>
  );
};

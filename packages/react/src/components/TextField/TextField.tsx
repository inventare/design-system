import { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: ReactNode;
  helperText?: string;
  validFeedback?: string;
  invalidFeedback?: string;
}

export const TextField = ({
  id,
  label,
  helperText,
  validFeedback,
  invalidFeedback,
  ...props
}: TextFieldProps) => {
  const getText = () => {
    if (invalidFeedback) {
      return invalidFeedback;
    }
    if (validFeedback) {
      return validFeedback;
    }
    return helperText;
  };
  const text = getText();

  return (
    <div
      className={clsx({
        "form-control": true,
        invalid: !!invalidFeedback,
        valid: !invalidFeedback && !!validFeedback,
      })}
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {text && <div className="helper-text">{text}</div>}
    </div>
  );
};

import { renderFormControl, FormControlProps } from '../FormControl/FormControl';
import { renderButton } from '../Button/Button';

export interface FormRowProps {
  rows: Array<FormControlProps>;
  submitRow?: boolean;
  submitRowStretch?: boolean;
  submitRowAlign?: 'left' | 'center' | 'right';
}

export const renderFormRow = ({
  rows,
  submitRow,
  submitRowStretch = false,
  submitRowAlign = 'left',
}: FormRowProps) => {
  const container = document.createElement('div');
  container.style.maxWidth = '350px';

  for (const row of rows) {
    const rowElement = document.createElement('div');
    rowElement.className = 'form-row';
    rowElement.appendChild(renderFormControl(row));

    container.appendChild(rowElement);
  }

  if (!submitRow) {
    return container;
  }

  const submitRowElement = document.createElement('div');

  const classes = ['form-row', 'submit'];
  if (!submitRowStretch) {
    classes.push(submitRowAlign);
  }
  submitRowElement.className = classes.join(' ');
  submitRowElement.appendChild(renderButton({ variant: 'primary', outline: true, label: 'Go Back' }));
  submitRowElement.appendChild(renderButton({ variant: 'primary', label: 'Send' }));

  container.appendChild(submitRowElement);

  return container;
};

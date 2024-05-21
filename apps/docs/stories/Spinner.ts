export interface SpinnerProps {
  circle?: boolean;
}

export const createSpinner = ({
}: SpinnerProps) => {
  const spinner = document.createElement('div');
  spinner.style.width = '200px'
  spinner.style.height = '200px'
  spinner.className = 'spinner';

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');

  spinner.appendChild(div1);
  spinner.appendChild(div2);
  spinner.appendChild(div3);
  spinner.appendChild(div4);

  return spinner;
}


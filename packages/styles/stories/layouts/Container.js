import './Container.css';

export const createContainer = ({
  variant = 'container',
}) => {
  const div = document.createElement('div');
  div.className = variant;

  const wrapper = document.createElement('div');
  wrapper.className = "container-wrapper"
  wrapper.appendChild(div);

  return wrapper;
};

export interface ContainerProps {
  fluid?: boolean;
  maxWidth?: string;
}

export const createContainer = ({
  fluid,
  maxWidth,
}: ContainerProps) => {

  const container = document.createElement('div');

  if (maxWidth) {
    container.className = `container-${maxWidth}`;
  } else if (fluid) {
    container.className = 'container-fluid';
  } else {
    container.className = 'container';
  }
  container.style.height = '300px';

  const child = document.createElement('div');
  child.style.backgroundColor = 'var(--color-primary-500)';
  child.style.display = 'flex';
  child.style.alignItems = 'center';
  child.style.justifyContent = 'center';
  child.style.textAlign = 'center';
  child.style.height = '100%';
  child.innerHTML = 'CONTAINER CHILD';

  container.appendChild(child);

  return container;
};

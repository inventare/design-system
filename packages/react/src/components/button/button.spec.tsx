import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render a <button />', () => {
    render(<Button>Text</Button>);

    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  it('should render correct child text', () => {
    render(<Button>my text here</Button>);

    expect(screen.queryByText(/my text here/)).toBeInTheDocument();
  })

  it('should render correct child elements', () => {
    render(
      <Button>
        <span data-testid="id1"></span>
        <span data-testid="id2"></span>
      </Button>
    );

    expect(screen.queryByTestId('id1')).toBeInTheDocument();
    expect(screen.queryByTestId('id2')).toBeInTheDocument();
  });

  it('should <button /> has correct classes without className', () => {
    const color = 'danger';
    const size = 'large'
    const classList = ['btn', color, size];
    render(<Button size={size} color={color} />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes without outline', () => {
    const className = 'my-button'
    const color = 'danger';
    const size = 'large'
    const classList = [className, 'btn', color, size];
    render(<Button className={className} size={size} color={color} />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes with outline', () => {
    const className = 'my-button'
    const color = 'primary';
    const size = 'normal'
    const classList = [className, 'btn', color, size, 'outline'];
    render(<Button className={className} size={size} color={color} outline />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });
});

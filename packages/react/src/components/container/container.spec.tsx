import { render, screen } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  it('should render a div with container class', () => {
    render(<Container data-testid="container" />);

    expect(screen.queryByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('container').className.trim()).toEqual('container');
    expect(screen.getByTestId('container').tagName).toEqual('DIV');
  });

  it('should render a div with container class and custom classes', () => {
    render(<Container className='really' data-testid="container" />);

    expect(screen.queryByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('container').className.trim()).toEqual('container really');
    expect(screen.getByTestId('container').tagName).toEqual('DIV');
  });

  it('should render a custom element passing with as', () => {
    render(<Container as="a" href="#" className='really' />);

    expect(screen.queryByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link').className.trim()).toEqual('container really');
  });
});

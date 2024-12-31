import { render, screen } from '@testing-library/react';
import { FormControl } from './form-control';

describe("FormControl", () => {
  it('should render a div with form-control class and childs', () => {
    render(
      <FormControl className='my-row' data-testid="row">
        <div data-testid="t1" />
        <div data-testid="t2" />
      </FormControl>
    );

    expect(screen.queryByTestId("row")).toBeInTheDocument();
    expect(screen.getByTestId('row')).toHaveAttribute('class', 'my-row form-control');
    expect(screen.getByTestId('row').tagName).toBe("DIV");
    expect(screen.queryByTestId("t1")).toBeInTheDocument();
    expect(screen.queryByTestId("t2")).toBeInTheDocument();
  });

  it('should render a custom element using as attribute', () => {
    render(
      <FormControl className='my-row' data-testid="row" as="section">
        <div data-testid="t1" />
        <div data-testid="t2" />
      </FormControl>
    );

    expect(screen.queryByTestId("row")).toBeInTheDocument();
    expect(screen.getByTestId('row')).toHaveAttribute('class', 'my-row form-control');
    expect(screen.getByTestId('row').tagName).toBe("SECTION");
    expect(screen.queryByTestId("t1")).toBeInTheDocument();
    expect(screen.queryByTestId("t2")).toBeInTheDocument();
  });
});

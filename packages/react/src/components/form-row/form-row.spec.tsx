import { render, screen } from '@testing-library/react';
import { FormRow } from './form-row';

describe("FormRow", () => {
  it('should render a div with correct child and class', () => {
    const className = "my-class"
    render(
      <FormRow className={className} data-testid="row">
        <div data-testid="id1"></div>
        <div data-testid="id2"></div>
      </FormRow>
    );

    expect(screen.queryByTestId('row')).toBeInTheDocument();
    expect(screen.queryByTestId('id1')).toBeInTheDocument();
    expect(screen.queryByTestId('id2')).toBeInTheDocument();
    expect(screen.getByTestId('row').tagName).toEqual('DIV');
    expect(Array.from(screen.getByTestId('row').classList)).toMatchObject([className, 'form-row']);
  });

  it('should change row element using as attribute', () => {
    const className = "my-class"
    render(
      <FormRow className={className} data-testid="row" as={"span"}>
        <div data-testid="id1"></div>
        <div data-testid="id2"></div>
      </FormRow>
    );

    expect(screen.queryByTestId('row')).toBeInTheDocument();
    expect(screen.queryByTestId('id1')).toBeInTheDocument();
    expect(screen.queryByTestId('id2')).toBeInTheDocument();
    expect(screen.getByTestId('row').tagName).toEqual('SPAN');
    expect(Array.from(screen.getByTestId('row').classList)).toMatchObject([className, 'form-row']);
  });
});

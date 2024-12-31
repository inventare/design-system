import { render, screen } from '@testing-library/react';
import { FormInput } from './form-input';

describe("FormInput", () => {
  it('should render a textbox role', () => {
    render(<FormInput />);

    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });

  it('should render a custom textbox component using as', () => {
    const CustomInput = () => (
      <input className="custom-component" data-testid="ci" />
    )
    render(<FormInput as={CustomInput} />);

    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('data-testid', 'ci');
    expect(screen.getByRole('textbox')).toHaveAttribute('class', 'custom-component');
  });
});

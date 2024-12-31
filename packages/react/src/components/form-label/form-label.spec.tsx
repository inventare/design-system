import { render, screen } from '@testing-library/react';
import { FormLabel } from './form-label';
import { PropsWithChildren } from 'react';

describe("FormLabel", () => {
  it('should render a <label />', () => {
    render(
      <>
        <FormLabel htmlFor="form">My Label</FormLabel>
        <input id="form" />
      </>
    );

    expect(screen.queryByLabelText(/^My Label$/i)).toBeInTheDocument();
  });

  it('should be possible to change label element using as attribute', () => {
    const CustomLabel = ({ htmlFor, children }: PropsWithChildren<{ htmlFor: string }>) => (
      <label data-testid="c-label" className="label" htmlFor={htmlFor}>{children}</label>
    );
    render(
      <>
        <FormLabel as={CustomLabel} htmlFor="form">My Label</FormLabel>
        <input id="form" />
      </>
    );

    expect(screen.queryByLabelText(/^My Label$/i)).toBeInTheDocument();
    expect(screen.queryByTestId("c-label")).toBeInTheDocument();
    expect(Array.from(screen.getByTestId("c-label").classList)).toContain("label");
  })
});

import { render, screen } from "@testing-library/react";
import { Spinner } from "./spinner";

describe("Components/Spinner", () => {
  it('should render an div with data-testid="spinner"', () => {
    render(<Spinner />);

    expect(screen.queryByTestId("spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("spinner")?.tagName).toEqual("DIV");
  });

  it("should set css property if color property is parsed", () => {
    const color = "red";
    render(<Spinner color={color} />);

    const spinner = screen.getByTestId("spinner");
    const property = spinner.style.getPropertyValue(
      "--inventare-spinner-color"
    );
    expect(property).toEqual(color);
  });

  it("should set css property if size property is parsed", () => {
    const size = 100;
    render(<Spinner size={size} />);

    const spinner = screen.getByTestId("spinner");
    const property = spinner.style.getPropertyValue("--inventare-spinner-size");
    expect(property).toEqual(`${size}px`);
  });

  it("should set css property if width property is parsed", () => {
    const width = 3;
    render(<Spinner width={width} />);

    const spinner = screen.getByTestId("spinner");
    const property = spinner.style.getPropertyValue(
      "--inventare-spinner-width"
    );
    expect(property).toEqual(`${width}px`);
  });
});

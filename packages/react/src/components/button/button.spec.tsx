import { vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Components/Button", () => {
  it("should renders an button role", () => {
    render(<Button>My Button!</Button>);

    expect(screen.queryByRole("button")).toBeInTheDocument();
  });

  it("should renders the children text", () => {
    render(<Button>My Button!</Button>);

    expect(screen.queryByText("My Button!")).toBeInTheDocument();
  });

  it("should renders the children element", () => {
    render(
      <Button>
        <span data-testid="any-button">Hii</span>
      </Button>
    );

    expect(screen.queryByTestId("any-button")).toBeInTheDocument();
  });

  it("should renders the loading text if isLoading is true", () => {
    render(
      <Button isLoading loadingText="This is Loading...">
        My Button!
      </Button>
    );

    expect(screen.queryByText("My Button!")).not.toBeInTheDocument();
    expect(screen.queryByText("This is Loading...")).toBeInTheDocument();
  });

  it('should render an link if as="a"', () => {
    render(
      <Button as="a" href="#link">
        My Link
      </Button>
    );

    expect(screen.queryByRole("link")).toBeInTheDocument();
    expect(screen.queryByRole("link")).toHaveAttribute("href", "#link");
    expect(screen.queryByRole("link")).toHaveClass("btn");
  });

  it("should renders the loading spinner if isLoading is true", () => {
    render(
      <Button isLoading loadingText="Loading..." loadingType="spinner">
        My Button!
      </Button>
    );

    expect(screen.queryByText("My Button!")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByTestId("spinner")).toBeInTheDocument();
  });

  it("should set the loading spinner properties if properties is parsed", () => {
    const size = 30;
    const width = 6;
    render(
      <Button
        isLoading
        loadingType="spinner"
        loadingSpinnerSize={size}
        loadingSpinnerWidth={width}
      >
        My Button!
      </Button>
    );

    const spinner = screen.getByTestId("spinner");
    const widthProp = spinner.style.getPropertyValue(
      "--inventare-spinner-width"
    );
    const sizeProp = spinner.style.getPropertyValue("--inventare-spinner-size");
    expect(widthProp).toEqual(`${width}px`);
    expect(sizeProp).toEqual(`${size}px`);
  });

  it("should not call onClick when disabled is true", async () => {
    const onClick = vitest.fn();
    render(
      <Button onClick={onClick} disabled>
        My Button!
      </Button>
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});

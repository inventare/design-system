import { render, screen } from "@testing-library/react";
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

  it.todo("should renders the loading spinner");
});

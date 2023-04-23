import { vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Skeleton } from "./skeleton";

describe("Components/Skeleton", () => {
  it("should not render the skeleton component if isLoading is false", () => {
    render(<Skeleton isLoading={false} />);

    const skeleton = screen.queryByTestId("skeleton");
    expect(skeleton).not.toBeInTheDocument();
  });

  it("should render the children if isLoading is false", () => {
    render(
      <Skeleton isLoading={false}>
        <button>Button</button>
      </Skeleton>
    );

    const button = screen.queryByRole("button");
    expect(button).toBeInTheDocument();
  });
});

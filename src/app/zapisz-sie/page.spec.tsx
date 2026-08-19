import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("signup page", () => {
  it("renders the ActiveNow widget instead of the custom form selector", () => {
    const { container } = render(<Page />);

    expect(
      container.querySelector(
        ".activenow-form-container.activenow-form-102923-container",
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Wybierz aktywność, na którą chcesz się zapisać"),
    ).not.toBeInTheDocument();
  });
});

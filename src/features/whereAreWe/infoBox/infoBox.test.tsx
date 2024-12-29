import { render, screen } from "@testing-library/react";
import { InfoBox } from "./infoBox";

describe("infoBox section", () => {
  it("should render the infoBox section that display text based one array ,array is created from text split based on separator", () => {
    render(
      <InfoBox
        text="607 880 086 oraz 691 376 287"
        separator="oraz"
        variant="green"
      />,
    );

    expect(screen.getByText("607 880 086")).toBeInTheDocument();
    expect(screen.getByText("oraz")).toBeInTheDocument();
    expect(screen.getByText("691 376 287")).toBeInTheDocument();
  });
});

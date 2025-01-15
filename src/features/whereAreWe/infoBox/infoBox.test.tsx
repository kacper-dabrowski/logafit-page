import { render, screen } from "@testing-library/react";
import { InfoBox } from "./infoBox";

describe("infoBox section", () => {
  it("displays infoBox text correcly ", () => {
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

  it("injects a separator in a separate element", () => {
    const { container } = render(
      <InfoBox
        text="607 880 086 oraz 691 376 287"
        separator="oraz"
        variant="green"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("handles missing optional separator prop", () => {
    const { container } = render(
      <InfoBox text="607 880 086 oraz 691 376 287" variant="green" />,
    );

    expect(container).toMatchSnapshot();
  });
});

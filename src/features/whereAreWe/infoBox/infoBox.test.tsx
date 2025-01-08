import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
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
    const domTree = renderer
      .create(
        <InfoBox
          text="607 880 086 oraz 691 376 287"
          separator="oraz"
          variant="green"
        />,
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

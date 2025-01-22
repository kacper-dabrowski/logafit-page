import { render, screen } from "@testing-library/react";
import { InfoBox } from "./infoBox";

describe("infoBox section", () => {
  it("displays infoBox title and text correcly ", () => {
    render(
      <InfoBox title="Telefonicznie" text="607 880 086" variant="green" />,
    );

    expect(screen.getByText("Telefonicznie")).toBeInTheDocument();
    expect(screen.getByText("607 880 086")).toBeInTheDocument();
  });

  it("infoBox has the correct structure", () => {
    const { container } = render(
      <InfoBox title="Telefonicznie" text="607 880 086" variant="green" />,
    );

    expect(container).toMatchSnapshot();
  });
});

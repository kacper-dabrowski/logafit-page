import { render, screen } from "@testing-library/react";
import { WhereAreWe } from "./whereAreWe";

describe("where are we section", () => {
  it("should render the where are we section", () => {
    render(<WhereAreWe />);

    expect(screen.getByText("Basen Hotel Copernicus")).toBeInTheDocument();
    expect(screen.getByText("Aqua Toruń Bażyńskich")).toBeInTheDocument();
    expect(screen.getByText("Olender Wielka Nieszawka")).toBeInTheDocument();
    expect(screen.getByText("Mini Aqua Park Hallera")).toBeInTheDocument();
    expect(screen.getByText("Skontaktuj się z nami")).toBeInTheDocument();
  });
});

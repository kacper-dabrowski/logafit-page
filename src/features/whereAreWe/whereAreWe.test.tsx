import { render, screen } from "@testing-library/react";
import { WhereAreWe } from "./whereAreWe";
import { fakeFeaturedVenue } from "../contentful/featuredVenues/featuredVenue.fixture";

describe("where are we section", () => {
  it("should render the where are we section", () => {
    render(
      <WhereAreWe
        entries={[
          { ...fakeFeaturedVenue, name: "Venue" },
          { ...fakeFeaturedVenue, name: "Another venue" },
        ]}
      />,
    );

    expect(screen.getByText("Miejsca realizacji zajęć")).toBeInTheDocument();
    expect(screen.getByText("Venue")).toBeInTheDocument();
    expect(screen.getByText("Another venue")).toBeInTheDocument();
    expect(screen.getByAltText("Venue")).toBeInTheDocument();
    expect(screen.getByAltText("Another venue")).toBeInTheDocument();
  });
});

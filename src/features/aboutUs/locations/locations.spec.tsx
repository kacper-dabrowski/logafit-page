import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Locations } from "./locations";
import { ServiceLocation } from "../../contentful/serviceLocations/serviceLocations.transformer";

const locationsFixture: ServiceLocation[] = [
  {
    category: "categoryA",
    title: "locationAInCategoryA",
    list: ["locationA", "phoneNumberA"],
  },
  {
    category: "categoryA",
    title: "locationBInCategoryA",
    list: ["locationB", "phoneNumberB"],
  },
];

describe("rendering locations", () => {
  it("should render the component with the first category initially", () => {
    render(<Locations locations={locationsFixture} />);

    expect(screen.getByRole("button")).toHaveTextContent("categoryA");

    expect(screen.getByText("locationA")).toBeInTheDocument();
    expect(screen.getByText("phoneNumberA")).toBeInTheDocument();
  });

  it("should allow a user to switch the locations tab", async () => {
    render(
      <Locations
        locations={[
          ...locationsFixture,
          {
            category: "categoryB",
            title: "locationAInCategoryB",
            list: ["newLocation", "newPhoneNumber"],
          },
        ]}
      />,
    );

    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByText("locationA")).toBeInTheDocument();
    expect(screen.getByText("phoneNumberA")).toBeInTheDocument();

    await userEvent.click(screen.getByText("categoryB"));

    expect(screen.getByText("newLocation")).toBeInTheDocument();
    expect(screen.getByText("newPhoneNumber")).toBeInTheDocument();

    expect(screen.queryByText("locationA")).not.toBeInTheDocument();
    expect(screen.queryByText("phoneNumberA")).not.toBeInTheDocument();
  });
});

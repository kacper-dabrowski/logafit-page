import { render, screen } from "@testing-library/react";
import { ActiveNowSignupForm } from "./activeNowSignupForm";

const ACTIVE_NOW_SCRIPT_URL =
  "https://app.activenow.io/external/signup_form/load_by_js?age_group=&city_id=&code=2362917b677035a47f17909310e0bd03&discipline_id=&proficiency_id=&school_id=1255&signup_form_id=102923&venue_id=&zz=";

describe("ActiveNowSignupForm", () => {
  it("loads the ActiveNow form in the vendor container", () => {
    const { container } = render(<ActiveNowSignupForm />);

    const formContainer = container.querySelector(
      ".activenow-form-container.activenow-form-102923-container",
    );
    const script = formContainer?.querySelector("script");

    expect(formContainer).toBeInTheDocument();
    expect(script).toHaveAttribute("src", ACTIVE_NOW_SCRIPT_URL);
    expect((script as HTMLScriptElement).async).toBe(true);
    expect(
      screen.getByAltText("Ładowanie formularza zapisów"),
    ).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { CompanyData } from "../../features/contentful/companyData/companyData.transformer";
import { companyDataFixture } from "../../features/contentful/companyData/companyData.fixture";

const list: CompanyData[] = [companyDataFixture];

describe("Footer", () => {
  it("displays contact information", () => {
    renderComponent();

    expect(screen.getByText("691 376 287")).toBeInTheDocument();
    expect(screen.getByText("607 880 086")).toBeInTheDocument();
    expect(screen.getByText("biuro@logafit.pl")).toBeInTheDocument();
    expect(screen.getByText("facebook.com/logafit")).toBeInTheDocument();
  });

  it("should render given company data", () => {
    renderComponent();

    Object.values(companyDataFixture).forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  function renderComponent() {
    render(<Footer companyDataList={list} />);
  }
});

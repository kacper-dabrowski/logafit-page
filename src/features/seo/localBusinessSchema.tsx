import Script from "next/script";
import { CompanyData } from "../contentful/companyData/companyData.transformer";

interface LocalBusinessSchemaProps {
  companyData: CompanyData;
}

export function LocalBusinessSchema({ companyData }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://logafit.pl/#o-nas",
    name: companyData.companyName,
    description:
      "Logafit Toruń - Centrum Zdrowia i Fitness | Szkoła i Nauka Pływania",
    image: "https://logafit.pl/assets/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address,
      addressLocality: "Toruń",
      postalCode: "87-100",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.007814",
      longitude: "18.5936164",
    },
    telephone: ["+48607880086", "+48691376287"],
    email: "biuro@logafit.pl",
    url: "https://logafit.pl",
    taxID: companyData.nipNumber,
    sameAs: ["https://facebook.com/logafit"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Toruń",
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

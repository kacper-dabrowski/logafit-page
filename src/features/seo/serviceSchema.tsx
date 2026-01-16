import Script from "next/script";

interface ServiceOffer {
  name: string;
  price: string;
  description?: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  offers?: ServiceOffer[];
  image?: string;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  offers,
  image,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://logafit.pl/#o-nas",
      name: "Logafit",
      url: "https://logafit.pl",
    },
    areaServed: {
      "@type": "City",
      name: "Toruń",
    },
    ...(image && { image }),
    ...(offers &&
      offers.length > 0 && {
        offers: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          price: offer.price,
          priceCurrency: "PLN",
          ...(offer.description && { description: offer.description }),
        })),
      }),
  };

  return (
    <Script
      id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

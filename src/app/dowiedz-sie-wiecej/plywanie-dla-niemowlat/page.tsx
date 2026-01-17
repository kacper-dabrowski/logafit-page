import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Pływanie dla niemowląt",
  description:
    "Pływanie dla niemowląt w Toruniu. Zajęcia od 3 miesiąca życia z profesjonalnymi instruktorami. Wspomaganie naturalnego rozwoju dziecka w wodzie.",
  openGraph: {
    title: "Pływanie dla niemowląt | Logafit Toruń",
    description:
      "Zajęcia pływania dla niemowląt od 3 miesiąca życia. Temperatura wody 32-33°C. Profesjonalni instruktorzy.",
    url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-niemowlat",
    images: [
      {
        url: "/assets/infants-swimming.png",
        width: 520,
        height: 430,
        alt: "Pływające niemowlęta",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-niemowlat",
  },
};

export default async function Page() {
  return (
    <ContentfulPage
      slug="plywanie-dla-niemowlat"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Pływanie dla niemowląt",
          url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-niemowlat",
        },
      ]}
    />
  );
}

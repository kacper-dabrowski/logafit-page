import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Pływanie dla dzieci",
  description:
    "Nauka pływania dla dzieci w Toruniu. Szkoła pływania Logafit oferuje kursy dla dzieci od 3 roku życia. Zajęcia grupowe i indywidualne.",
  openGraph: {
    title: "Pływanie dla dzieci | Logafit Toruń",
    description:
      "Szkoła pływania dla dzieci w Toruniu. Kursy od 3 roku życia do poziomu zaawansowanego.",
    url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-dzieci",
    images: [
      {
        url: "/assets/plywanie-dla-niemowlat-cover.png",
        width: 520,
        height: 430,
        alt: "Dziecko pływające w basenie",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-dzieci",
  },
};

export default function Page() {
  return (
    <ContentfulPage
      slug="plywanie-dla-dzieci"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Pływanie dla dzieci",
          url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-dzieci",
        },
      ]}
    />
  );
}

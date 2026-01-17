import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Rehabilitacja w wodzie",
  description:
    "Rehabilitacja w wodzie w Toruniu. Terapia dla dzieci z zaburzeniami napięcia mięśniowego, wcześniaków i osób z niepełnosprawnością. Logafit.",
  openGraph: {
    title: "Rehabilitacja w wodzie | Logafit Toruń",
    description:
      "Terapia w wodzie dla dzieci - wykorzystanie walorów wody w rehabilitacji.",
    url: "https://logafit.pl/dowiedz-sie-wiecej/rehabilitacja-w-wodzie",
    images: [
      {
        url: "/assets/couple-relaxing-cover.png",
        width: 430,
        height: 320,
        alt: "Rehabilitacja w wodzie",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/rehabilitacja-w-wodzie",
  },
};

export default function Page() {
  return (
    <ContentfulPage
      slug="rehabilitacja-w-wodzie"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Rehabilitacja w wodzie",
          url: "https://logafit.pl/dowiedz-sie-wiecej/rehabilitacja-w-wodzie",
        },
      ]}
    />
  );
}

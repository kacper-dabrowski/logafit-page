import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Aqua Fitness",
  description:
    "Aqua Fitness w Toruniu - bezpieczne i wszechstronne ćwiczenia w wodzie. Zajęcia dla dorosłych, w tym Aqua Mama dla kobiet w ciąży. Logafit.",
  openGraph: {
    title: "Aqua Fitness | Logafit Toruń",
    description:
      "Aqua Fitness - połączenie muzyki, ruchu i wody. Zajęcia dla dorosłych i kobiet w ciąży (Aqua Mama).",
    url: "https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness",
    images: [
      {
        url: "/assets/aqua-fitness-cover.png",
        width: 430,
        height: 320,
        alt: "Aqua Fitness zajęcia",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness",
  },
};

export default function Page() {
  return (
    <ContentfulPage
      slug="aqua-fitness"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Aqua Fitness",
          url: "https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness",
        },
      ]}
    />
  );
}

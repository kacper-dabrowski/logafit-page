import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Pływanie korekcyjne",
  description:
    "Pływanie korekcyjne w Toruniu dla dzieci i młodzieży z wadami postawy. Zajęcia przy skoliozie, kifozie, płaskostopiu. Logafit.",
  openGraph: {
    title: "Pływanie korekcyjne | Logafit Toruń",
    description:
      "Pływanie korekcyjne dla dzieci i młodzieży z wadami postawy - skolioza, kifoza, płaskostopie.",
    url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-korekcyjne",
    images: [
      {
        url: "/assets/baby-swimming.png",
        width: 520,
        height: 430,
        alt: "Pływanie korekcyjne",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-korekcyjne",
  },
};

export default function Page() {
  return (
    <ContentfulPage
      slug="plywanie-korekcyjne"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Pływanie korekcyjne",
          url: "https://logafit.pl/dowiedz-sie-wiecej/plywanie-korekcyjne",
        },
      ]}
    />
  );
}

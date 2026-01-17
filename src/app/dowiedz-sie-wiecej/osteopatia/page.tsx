import { Metadata } from "next";
import { ContentfulPage } from "../../../features/contentful/pages/page";

export const metadata: Metadata = {
  title: "Osteopatia",
  description:
    "Osteopatia pediatryczna w Toruniu. Pomoc przy kolkach, asymetrii ciała, zaburzeniach rozwoju motorycznego, wadach postawy. Logafit.",
  openGraph: {
    title: "Osteopatia | Logafit Toruń",
    description:
      "Osteopatia dla noworodków, niemowląt i dzieci - kolki, asymetria ciała, wady postawy.",
    url: "https://logafit.pl/dowiedz-sie-wiecej/osteopatia",
    images: [
      {
        url: "/assets/infants-swimming.png",
        width: 520,
        height: 430,
        alt: "Osteopatia pediatryczna",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/osteopatia",
  },
};

export default function Page() {
  return (
    <ContentfulPage
      slug="osteopatia"
      breadCrumbItems={[
        { name: "Strona główna", url: "https://logafit.pl" },
        { name: "Oferta", url: "https://logafit.pl/oferta" },
        {
          name: "Osteopatia",
          url: "https://logafit.pl/dowiedz-sie-wiecej/osteopatia",
        },
      ]}
    />
  );
}

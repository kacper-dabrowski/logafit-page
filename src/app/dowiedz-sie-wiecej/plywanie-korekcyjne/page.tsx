import { Metadata } from "next";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import {
  FileLinksWrapper,
  FileLink,
} from "../../../features/shared/fileLink/fileLink";
import { ServiceSchema } from "../../../features/seo/serviceSchema";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

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

const imageProps = {
  src: "/assets/baby-swimming.png",
  width: 520,
  height: 430,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <ServiceSchema
        serviceName="Pływanie korekcyjne"
        serviceDescription="Pływanie korekcyjne dla dzieci i młodzieży z wadami postawy - skolioza, kifoza, płaskostopie."
        serviceUrl="https://logafit.pl/dowiedz-sie-wiecej/plywanie-korekcyjne"
        image="https://logafit.pl/assets/baby-swimming.png"
        offers={[{ name: "Cykl 10 spotkań", price: "600" }]}
      />
      <h2 className={styles.heading}>Pływanie korekcyjne</h2>
      <div>
        <TextWithImage
          imageProps={imageProps}
          containerCustomClasses={styles.container}
        >
          <div>
            <Paragraph>
              Oferta kierowana jest do dzieci i młodzieży z wadami postawy
              posiadającymi podstawowe umiejętności pływackie.
            </Paragraph>
            <br />
            <Paragraph>
              Usprawnianie prowadzone jest w kontekście takich wad postawy jak
              plecy okrągłe, plecy wklęsłe, skoliozy, płaskostopie oraz
              dysfunkcje pokrewne.
            </Paragraph>
            <br />
            <Paragraph>
              Zajęcia mają charakter grupowy z uwzględnieniem indywidualizacji
              ćwiczeń. Koszt cyklu 10 spotkań wynosi 600 zł. Sesja trwa 45
              minut. Zajęcia indywidualne: 150zł za lekcję
            </Paragraph>
            <Paragraph className={styles.red}>
              Zajęcia odbywają się wyłącznie w Hotelu Copernicus
            </Paragraph>
          </div>

          <FileLinksWrapper>
            <FileLink fileName="harmonogram_szkoła_pływania.pdf">
              Harmonogram
            </FileLink>
          </FileLinksWrapper>
        </TextWithImage>
      </div>
    </div>
  );
}

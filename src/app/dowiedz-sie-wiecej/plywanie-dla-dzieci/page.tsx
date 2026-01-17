import { clsx } from "clsx";
import { Metadata } from "next";
import { List } from "../../../features/infoPage/list";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { ServiceSchema } from "../../../features/seo/serviceSchema";
import { FileLink } from "../../../features/shared/fileLink/fileLink";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

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

const imageProps = {
  src: "/assets/plywanie-dla-niemowlat-cover.png",
  width: 520,
  height: 430,
  alt: "dziecko pływające w basenie",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <ServiceSchema
        serviceName="Nauka pływania dla dzieci"
        serviceDescription="Nauka pływania dla dzieci w Toruniu. Kursy od 3 roku życia do poziomu zaawansowanego."
        serviceUrl="https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-dzieci"
        image="https://logafit.pl/assets/plywanie-dla-niemowlat-cover.png"
      />
      <h2 className={clsx(styles.mainHeader, styles.header)}>
        Pływanie dla dzieci
      </h2>
      <TextWithImage centered imageProps={imageProps}>
        <div>
          <Paragraph>
            Naukę pływania rozpoczynamy już u najmłodszych dzieci. Pierwszym
            etapem przygotowującym do właściwej nauki pływania jest etap
            oswajania z wodą. Oswajamy dzieci już od 3 miesiąca życia i starsze.
            Naukę charakteryzującą się przyswajaniem elementów pływania
            zaczynamy u dzieci powyżej 3 roku życia. Typowa nauka pływania w
            naszej szkole rozpoczyna się u dzieci 4-5 letnich. Dla starszych
            dzieci proponujemy pływanie w stopniu zawansowanym oraz doskonalenie
            umiejętności pływackich
          </Paragraph>
        </div>
      </TextWithImage>
      <div>
        <div className={styles.tile}>
          <h2 className={clsx(styles.header)}>Organizacja zajęć</h2>
          <div>
            <Paragraph>
              Cykl szkoleniowy odbywa się w kursach. Każdy kurs to 10 spotkań po
              których następuje weryfikacja umiejętności. W całym sezonie
              pływackim realizujemy 3 kursy – jesienny, zimowy i wiosenny.
            </Paragraph>
          </div>
        </div>
        <div className={styles.offerContainer}>
          <div className={styles.offer}>
            <h2 className={styles.header}>
              Pływanie Dla Najmłodszych (3-4 lata)
            </h2>
            <Paragraph>
              Nauka pływania poprzez zabawę, udział rodziców, 45-minutowe
              lekcje.
              <br />
              Cele zajęć:
            </Paragraph>

            <List
              items={[
                "Wykonywanie ruchów napędowych",
                "wślizgi",
                "zmiana pozycji",
              ]}
            />
          </div>
          <div className={styles.offer}>
            <h2 className={styles.header}>
              Pływanie Dla Dzieci (4 lata i starsze)
            </h2>
            <Paragraph>
              Nauka pływania z instruktorem, 45-minutowe lekcje <br /> Cele
              zajęć:
            </Paragraph>

            <List
              items={[
                "Zanurzanie twarzy",
                "ruchy napędowe",
                "wślizgi",
                "samodzielne przepłynięcie",
              ]}
            />
          </div>
          <div className={styles.offer}>
            <h2 className={styles.header}>
              Nauka Pływania Zaawansowana (6 lat i starsze)
            </h2>
            <Paragraph>
              Zaawansowane zajęcia na basenie sportowym, nauka różnych stylów
              pływackich. Nauka konkretnych stylów, rozpoczynając od kraula na
              grzbiecie i na piersiach.
            </Paragraph>
          </div>
          <div className={styles.offer}>
            <h2 className={styles.header}>
              Nauka Pływania Indywidualna dla Dzieci i Dorosłych
            </h2>
            <Paragraph>
              Polega na pracy 1:1. Instruktor przez 45 minut pracuje
              bezpośrednio z uczestnikiem. Program lekcji jest dostosowany do
              indywidualnych umiejętności i kompetencji uczestnika.
            </Paragraph>
            <br />
            <Paragraph>
              Terminy zajęć ustalane są bezpośrednio między instruktorem a
              uczestnikiem, natomiast rejestracja i dobór instruktora odbywa się
              przez biuro.
            </Paragraph>
          </div>
          <div>
            <div>
              <h2 className={styles.header}>Cennik</h2>
              <List
                items={[
                  "Zajęcia grupowe: 10 wejść – 600zł",
                  "Zajęcia indywidualne: 150zł za lekcję",
                ]}
              />
            </div>
          </div>
          <FileLink fileName="harmonogram_szkoła_pływania.pdf">
            Harmonogram
          </FileLink>
        </div>
      </div>
    </div>
  );
}

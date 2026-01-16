import { Metadata } from "next";
import { List } from "../../../features/infoPage/list";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import {
  FileLinksWrapper,
  FileLink,
} from "../../../features/shared/fileLink/fileLink";
import { BreadcrumbSchema } from "../../../features/seo/breadcrumbSchema";
import { ServiceSchema } from "../../../features/seo/serviceSchema";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

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

const imageProps = {
  src: "/assets/infants-swimming.png",
  width: 520,
  height: 430,
  alt: "pływające niemowlęta",
};

const BASE_URL = "https://logafit.pl";

export default function Page() {
  return (
    <div className={styles.page}>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: BASE_URL },
          { name: "Oferta", url: `${BASE_URL}/#oferta` },
          {
            name: "Pływanie dla niemowląt",
            url: `${BASE_URL}/dowiedz-sie-wiecej/plywanie-dla-niemowlat`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Pływanie dla niemowląt"
        serviceDescription="Zajęcia pływania dla niemowląt od 3 miesiąca życia. Wspomaganie naturalnego rozwoju dziecka w wodzie."
        serviceUrl="https://logafit.pl/dowiedz-sie-wiecej/plywanie-dla-niemowlat"
        image="https://logafit.pl/assets/infants-swimming.png"
        offers={[
          { name: "Zajęcia grupowe", price: "500", description: "10 wejść" },
          {
            name: "Zajęcia indywidualne",
            price: "170",
            description: "1 wejście",
          },
        ]}
      />
      <h2 className={styles.heading}>Pływanie dla niemowląt</h2>
      <div>
        <TextWithImage centered imageProps={imageProps}>
          <div>
            <Paragraph>
              Pływanie niemowląt polega na wspomaganiu naturalnego rozwoju
              dziecka, bazowaniu na odruchach z życia płodowego i ich
              podtrzymywaniu.
            </Paragraph>
            <div>
              <Paragraph>
                Zajęcia w wodzie to wszechstronna gimnastyka zawierająca w sobie
                elementy:
              </Paragraph>
              <List
                items={[
                  "masażu",
                  "zrównoważenia napięcia mięśniowego",
                  "poprawy czucia głębokiego",
                  "stymulacji sensorycznej ćwiczeń oddechowych",
                ]}
              />
            </div>
          </div>
        </TextWithImage>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h2 className={styles.secondaryHeader}>Organizacja zajęć</h2>
              <Paragraph>
                Spotkania realizujemy w warunkach przyjaznych najmłodszym
                dzieciom. Temperatura wody wynosi 32-33 stopnie Celsiusza.
                Szatnie wyposażone są w przewijaki i kojce dla dzieci. Czas
                trwania zajęć wynosi 30 minut - jest to optymalny czas zajęć dla
                dzieci od 3 miesiąca do 4 roku życia.
              </Paragraph>
              <Paragraph>Lekcje prowadzimy na basenach:</Paragraph>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://www.olender.info/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Olender w Wielkiej Nieszawce
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://www.mosirtorun.pl/mini-aquapark.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MOSiR w Toruniu ul. Hallera 79
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.secondaryHeader}>Cennik</h2>
              <List
                items={[
                  "Zajęcia grupowe: 10 wejść – 500 zł",
                  "Zajęcia indywidualne: 1 wejście – 170 zł️",
                ]}
              />
              <Paragraph className={styles.red}>
                Realizujemy wyłącznie w przychodni Zdrowa Rodzina
              </Paragraph>
              <FileLinksWrapper>
                <FileLink fileName="harmonogram_szkoła_pływania.pdf">
                  Harmonogram
                </FileLink>
                <FileLink fileName="grafik_szkoła_pływania.docx">
                  Grafik
                </FileLink>
              </FileLinksWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

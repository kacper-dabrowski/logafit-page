import { Metadata } from "next";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { ServiceSchema } from "../../../features/seo/serviceSchema";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

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

const imageProps = {
  src: "/assets/couple-relaxing-cover.png",
  width: 430,
  height: 320,
  alt: "pływająca para",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <ServiceSchema
        serviceName="Rehabilitacja w wodzie"
        serviceDescription="Terapia w wodzie dla dzieci z zaburzeniami napięcia mięśniowego, wcześniaków i osób z niepełnosprawnością."
        serviceUrl="https://logafit.pl/dowiedz-sie-wiecej/rehabilitacja-w-wodzie"
        image="https://logafit.pl/assets/couple-relaxing-cover.png"
        offers={[{ name: "Terapia", price: "150" }]}
      />
      <h2 className={styles.heading}>Terapia w wodzie</h2>
      <div>
        <TextWithImage imageProps={imageProps} centered>
          <div>
            <Paragraph>
              Proponujemy uzupełnienie rehabilitacji lądowej przy wykorzystaniu
              niesamowitych walorów wody: efektu naturalnego masażu i
              rozluźnienia ciała, sterowania ruchem przy wykorzystaniu wyporu
              wody. Poprzez zastosowanie odpowiednich technik możemy pracować z
              wybraną grupą mięśniową lub całościowo.
            </Paragraph>
          </div>
        </TextWithImage>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h2 className={styles.secondaryHeader}>Organizacja zajęć</h2>
              <Paragraph>
                Sesja terapeutyczna kierowana jest do dzieci m.in. z
                zaburzeniami napięcia mięśniowego, wcześniaków, dziećmi z
                niepełnosprawnością oraz dzieci z zaburzeniami motoryczności.
                Spotkanie trwa 30 minut podczas którego, skupiamy się na kilku
                kluczowych ćwiczeniach w danej dysfunkcji. Zajęcia mają
                charakter grupowy a dziecko ćwiczy wraz z Rodzicem.
              </Paragraph>
            </div>
            <div>
              <h2 className={styles.secondaryHeader}>Cennik</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Paragraph>Terapia: 150 zł</Paragraph>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

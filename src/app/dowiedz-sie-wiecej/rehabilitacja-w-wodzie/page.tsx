import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { FileLink } from "../../../features/shared/fileLink/fileLink";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

const imageProps = {
  src: "/assets/couple-relaxing-cover.png",
  width: 430,
  height: 320,
  alt: "pływająca para",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Rehabilitacja w wodzie</h2>
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
              <h3 className={styles.secondaryHeader}>Organizacja zajęć</h3>
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
              <h3 className={styles.secondaryHeader}>Cennik</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Paragraph>Udział w zajęciach: 10 spotkań – 500 zł</Paragraph>
                </li>
                <li className={styles.listItem}>
                  <Paragraph>Wejście jednorazowe: 170 zł</Paragraph>
                </li>
              </ul>
              <div className={styles.buttonsWrapper}>
                <FileLink fileName="GRAFIK-SZKOLA-PLYWANIA-23.pdf">
                  Grafik
                </FileLink>
                <FileLink fileName="Harmonogram-szkola-plywania-23.pdf">
                  Harmonogram
                </FileLink>
                <FileLink fileName="Regulamin-Szkola-Plywania-Logafit.pdf">
                  Regulamin
                </FileLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

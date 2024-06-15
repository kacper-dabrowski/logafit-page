import { List } from "../../../features/infoPage/list";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { FileLink } from "../../../features/shared/fileLink/fileLink";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

const imageProps = {
  src: "/assets/infants-swimming.png",
  width: 520,
  height: 430,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
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
              <h3 className={styles.secondaryHeader}>Organizacja zajęć</h3>
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
              <h3 className={styles.secondaryHeader}>Cennik</h3>
              <List
                items={[
                  "Zajęcia grupowe: 10 wejść – 500 zł",
                  "Zajęcia indywidualne: 1 wejście – 170 zł️",
                ]}
              />
              <Paragraph className={styles.red}>
                Realizujemy wyłącznie w przychodni Zdrowa Rodzina
              </Paragraph>
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

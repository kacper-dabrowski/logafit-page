import Image from "next/image";
import clsx from "clsx";
import styles from "./page.module.scss";
import { FileLink } from "../../../features/shared/fileLink/fileLink";

export default function Page() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Pływanie dla niemowląt</h2>
      <div>
        <div className={styles.topWrapper}>
          <div>
            <p className={styles.text}>
              Pływanie niemowląt polega na wspomaganiu naturalnego rozwoju
              dziecka, bazowaniu na odruchach z życia płodowego i ich
              podtrzymywaniu.
            </p>
            <div>
              <p className={styles.text}>
                Zajęcia w wodzie to wszechstronna gimnastyka zawierająca w sobie
                elementy:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>masażu</li>
                <li className={styles.listItem}>
                  zrównoważenia napięcia mięśniowego
                </li>
                <li className={styles.listItem}>poprawy czucia głębokiego</li>
                <li className={styles.listItem}>poprawy czucia głębokiego</li>
                <li className={styles.listItem}>
                  stymulacji sensorycznej ćwiczeń oddechowych
                </li>
              </ul>
            </div>
          </div>
          <Image
            className={styles.image}
            src="/assets/infants-swimming.png"
            width={520}
            height={430}
            alt="pływające niemowlęta"
          />
        </div>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h3 className={styles.secondaryHeader}>Organizacja zajęć</h3>

              <p className={styles.text}>
                Spotkania realizujemy w warunkach przyjaznych najmłodszym
                dzieciom. Temperatura wody wynosi 32-33 stopnie Celsiusza.
                Szatnie wyposażone są w przewijaki i kojce dla dzieci. Czas
                trwania zajęć wynosi 30 minut - jest to optymalny czas zajęć dla
                dzieci od 3 miesiąca do 4 roku życia.
              </p>
              <p className={styles.text}>Lekcje prowadzimy na basenach:</p>
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
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <p className={styles.text}>
                    Zajęcia grupowe: 10 wejść – 500 zł Realizujemy wyłącznie w
                    przychodni Zdrowa Rodzina
                  </p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>
                    Zajęcia indywidualne: 1 wejście – 170 zł️
                  </p>
                </li>
              </ul>
              <p className={clsx(styles.red, styles.text)}>
                Realizujemy wyłącznie w przychodni Zdrowa Rodzina
              </p>
              <div className={styles.buttonsWrapper}>
                <FileLink fileHref="">Cennik</FileLink>
                <FileLink fileHref="">Harmonogram</FileLink>
                <FileLink fileHref="">Regulamin</FileLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

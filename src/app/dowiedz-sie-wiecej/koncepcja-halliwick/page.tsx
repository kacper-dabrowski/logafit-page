import clsx from "clsx";
import Image from "next/image";
import styles from "./page.module.scss";
import { Paragraph } from "../../../features/shared/typography/paragraph";

export default function Page() {
  return (
    <div className={styles.container}>
      <h2 className={clsx(styles.mainHeader, styles.header)}>
        Koncepcja Halliwick®
      </h2>
      <div className={styles.mainContainer}>
        <div className={clsx(styles.descriptionContainer, styles.withMargin)}>
          <div>
            <Paragraph>
              Koncepcja Halliwick jest sposobem uczenia uczestniczenia w
              aktywnościach w wodzie, niezależnego poruszania się w niej i
              pływania wszystkich osób, ze zwróceniem szczególnej uwagi na osoby
              z trudnościami fizycznymi i/lub w uczeniu się (IHA 2000).
            </Paragraph>
            <br />
            <Paragraph>
              Koncepcja stosowana jest w wielu krajach na całym świecie i jest
              szczególnie ceniona przez terapeutów, jako jedna z form
              wielokompleksowej rehabilitacji dzieci i dorosłych z uszkodzeniami
              pochodzenia neurologicznego, chorych z zaburzeniami słuchu i
              wzroku, oraz z zaburzeniami emocjonalnymi i trudnościami w
              zachowaniu i uczeniu się.
            </Paragraph>
            <br />
            <Paragraph>
              10-cio punktowy program koncepcji Halliwick stanowi podstawę
              nauczania niezależnego poruszania się w wodzie i pływania dzieci,
              młodzieży i dorosłych bez względu na rodzaj i stopień ich
              niepełnosprawności. Stosowany może być z powodzeniem przy
              prowadzeniu zajęć z maluchami do 4 roku życia jak i w nauce
              dzieci, młodzieży i dorosłych.
            </Paragraph>
          </div>
          <div className={styles.image}>
            <Image
              src="/assets/people-swimming.png"
              width={435}
              height={320}
              alt="ludzie na basenie"
            />
          </div>
        </div>
        <div className={clsx(styles.priceContainer)}>
          <div>
            <h2 className={clsx(styles.header, styles.withMargin)}>
              Udział w kursie
            </h2>
            <Paragraph>
              Kurs przeznaczony jest dla fizjoterapeutów (mgr, licencjat),
              nauczycieli wychowania fizycznego, instruktorów pływania,
              pedagogów specjalnych, asystentów oraz dla wszystkich
              zainteresowanych, którzy lubią wodę i chcą pomagać osobom z
              niepełnosprawnościami podczas zajęć w wodzie. Kurs jest
              akredytowany przez Stowarzyszenie „Halliwick Polska” i
              zarejestrowany w International Halliwick Association.
            </Paragraph>
          </div>
          <div>
            <div className={styles.priceWrapper}>
              <h2 className={styles.header}>Cena</h2>
              <span className={styles.price}>1450 zł</span>
            </div>
            <Paragraph>
              Cena za kurs obejmuje zajęcia praktyczne i teoretyczne, materiały
              szkoleniowe, obiad, poczęstunek kawowy, certyfikat, ubezpieczenie
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

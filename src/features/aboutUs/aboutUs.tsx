import Image from "next/image";
import { SecondaryHeader } from "../shared/components/headers";
import styles from "./aboutUs.module.scss";

export function AboutUs() {
  return (
    <div>
      <SecondaryHeader>O nas</SecondaryHeader>
      <div className={styles.wrapper}>
        <Image
          src="/assets/about-us-logo.png"
          width={255}
          height={95}
          alt="logo logafit"
          className={styles.logo}
        />
        <Image
          src="/assets/logafit-footer-wave.svg"
          width={165}
          height={13}
          alt="fala"
          className={styles.upperWave}
        />
        <p className={styles.text}>
          Logafit to firma specjalizująca się w zajęciach ruchowych w wodzie.
          Nasz zespół tworzą fizjoterapeuci, nauczyciele wychowania fizycznego,
          instruktorzy i trenerzy pływania, pedagodzy, instruktorzy fitness i
          aqua fitness. Prowadzimy zajęcia w wodzie w szerokim zakresie od
          oswajania z wodą, pływania dla najmłodszych, poprzez naukę pływania
          dzieci w wieku przedszkolnym i szkolnym, doskonalenie pływania,
          pływanie korekcyjne, rehabilitację w wodzie, kończąc na pływaniu
          dorosłych i aqua aerobiku.
        </p>
        <Image
          src="/assets/logafit-footer-wave.svg"
          width={165}
          height={13}
          alt="fala"
          className={styles.bottomWave}
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { GradientHeader, PrimaryHeader } from "../shared/typography/headers";
import styles from "./aboutUs.module.scss";
import { Locations } from "./locations/locations";
import { ServiceLocation } from "../contentful/serviceLocations/serviceLocations.transformer";
import { InfoBox } from "./infoBox/infoBox";

interface AboutUsProps {
  locations: ServiceLocation[];
}

export function AboutUs({ locations }: AboutUsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background} />

      <PrimaryHeader id="o-nas">O nas</PrimaryHeader>
      <div className={styles.wrapper}>
        <Image
          src="/assets/about-us-logo.svg"
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
          dorosłych i aqua fitnessie. W Logafit specjalizujemy się w
          kompleksowej terapii niemowląt, dzieci i młodzieży, z naciskiem na
          stosowanie nowoczesnych technik osteopatycznych. Misją firmy jest
          wspieranie zdrowego rozwoju najmłodszych pacjentów poprzez holistyczne
          podejście do ich zdrowia i dobrostanu.
        </p>
        <Image
          src="/assets/logafit-footer-wave.svg"
          width={165}
          height={13}
          alt="fala"
          className={styles.bottomWave}
        />
      </div>
      <div>
        <GradientHeader variant="green">Zarejestruj się</GradientHeader>
        <div className={styles.contactDataContainer}>
          <a href="tel:607880086">
            <InfoBox title="Telefonicznie" text="607 880 086" variant="green" />
          </a>
          <a href="mailto:biuro@logafit.pl">
            <InfoBox
              title="Mailowo"
              text="biuro@logafit.pl"
              variant="darkblue"
            />
          </a>
          <Link href="/zapisz-sie">
            <InfoBox
              title="Poprzez formularz"
              text="Zapisz się ->"
              variant="blue"
            />
          </Link>
        </div>
        <div>
          <Locations locations={locations} />
        </div>
      </div>
    </div>
  );
}

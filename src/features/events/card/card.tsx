import Image from "next/image";
import styles from "./card.module.scss";

export function EventCard() {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>
        <Image
          src="/assets/cold-weather-icon.svg"
          width={18}
          height={18}
          alt="śnieżynka"
        />
        Zima 2024
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/events-camp-photo.png"
            width={202}
            height={150}
            alt="dzieci na stoku narciarskim"
          />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.heading}>Zimowisko - Czarna Góra</h3>
          <p>
            <span className={styles.bold}>Terminy:</span> I - 10-16.02.2024 oraz
            II - 17-23.02.2024
          </p>
          <p>
            <span className={styles.bold}>Miejsce:</span> 🇵🇱 Czarna Góra, Region
            Masyw Śnieżnika
          </p>
          <p>
            <span className={styles.bold}>Uczestnicy:</span> dzieci i młodzież w
            wieku 7 – 16 lat
          </p>
        </div>
      </div>
    </div>
  );
}

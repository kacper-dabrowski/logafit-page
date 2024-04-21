import Image from "next/image";
import styles from "./card.module.scss";

export function EventCard() {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <h3 className={styles.heading}>Zimowisko - Czarna Góra</h3>
        <div className={styles.badge}>
          <Image
            src="/assets/cold-weather-icon.svg"
            alt="śniezynka"
            width={12}
            height={12}
          />
          Zima 2024
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div>
          <div className={styles.textWrapper}>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/calendar-icon.svg"
                width={16}
                height={16}
                alt="ikona kalendarza"
              />
              <p>
                I - 10-16.02.2024
                <br />
                II - 17-23.02.2024
              </p>
            </div>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/pin-icon.svg"
                width={16}
                height={16}
                alt="ikona pinezki"
              />
              <p>🇵🇱 Czarna Góra, Region Masyw Śnieżnika</p>
            </div>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/group-icon.svg"
                width={16}
                height={16}
                alt="grupa ludzi"
              />
              <p>
                dzieci i młodzież <br /> w wieku 7 – 16 lat
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/events-camp-photo.png"
            width={202}
            height={150}
            alt="dzieci na stoku narciarskim"
          />
        </div>
      </div>
    </div>
  );
}

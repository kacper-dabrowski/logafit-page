import { EventCard } from "../camps/components/card/card";
import styles from "./healthTours.module.scss";

export function HealthTours() {
  return (
    <div className={styles.container}>
      <EventCard
        title="Zimowisko - Czarna Góra"
        imageSrc="/assets/events-camp-photo.png"
        imageAlt="dzieci na stoku narciarskim"
        renderDates={() => (
          <p>
            I - 10-16.02.2024
            <br />
            II - 17-23.02.2024
          </p>
        )}
        renderLocation={() => <p>🇵🇱 Czarna Góra, Region Masyw Śnieżnika</p>}
        renderAge={() => (
          <p>
            dzieci i młodzież <br /> w wieku 7 – 16 lat
          </p>
        )}
        type="winter"
      />
    </div>
  );
}

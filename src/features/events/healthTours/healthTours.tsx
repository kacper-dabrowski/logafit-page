import { EventCard } from "../camps/components/card/card";
import styles from "./healthTours.module.scss";

export function HealthTours() {
  return (
    <div className={styles.container}>
      <EventCard
        title="Turnus Leczniczy"
        imageSrc="/assets/people-walking.png"
        imageAlt="dzieci na stoku narciarskim"
        renderDates={() => <p>18-24 września 2023</p>}
        renderLocation={() => (
          <p>🇵🇱 Ośrodek Live, Okole pod Starogardem Gdańskim</p>
        )}
        renderAge={() => <p>Profesjonalna kadra medyczna i terapeutyczna</p>}
        type="healthTour"
      />
    </div>
  );
}

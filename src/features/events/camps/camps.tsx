import { EventCard } from "./card/card";
import { EventSwitch } from "./eventSwitch/eventSwitch";
import styles from "./camps.module.scss";

export function Camps() {
  return (
    <>
      <div className={styles.cardWrapper}>
        <EventCard />
      </div>
      <div className={styles.switchesWrapper}>
        <EventSwitch
          variant="yellow"
          iconSrc="/assets/sun-icon.svg"
          iconAltText="słońce"
        >
          Wydarzenia letnie
        </EventSwitch>
      </div>
    </>
  );
}

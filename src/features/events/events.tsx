import { SecondaryHeader } from "@/features/shared/components/headers";
import { OfferButton } from "../offer/button/button";
import { EventCard } from "./card/card";
import { EventSwitch } from "./eventSwitch/eventSwitch";
import styles from "./events.module.scss";

export function Events() {
  return (
    <div className={styles.wrapper}>
      <SecondaryHeader>Wydarzenia</SecondaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="blue">Obozy i kolonie</OfferButton>
        <OfferButton variant="green">Kursy i szkolenia</OfferButton>
        <OfferButton variant="lime">Turnusy zdrowotne</OfferButton>
      </div>
      <div className={styles.cardWrapper}>
        <EventCard />
        <div className={styles.switchesWrapper}>
          <EventSwitch
            variant="yellow"
            iconSrc="/assets/sun-icon.svg"
            iconAltText="słońce"
          >
            Wydarzenia letnie
          </EventSwitch>
          <EventSwitch
            variant="purple"
            iconSrc="/assets/archive-icon.svg"
            iconAltText="archiwum"
          >
            Archiwum wydarzeń
          </EventSwitch>
        </div>
      </div>
    </div>
  );
}
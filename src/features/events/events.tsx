"use client";

import { SecondaryHeader } from "@/features/shared/components/headers";
import { OfferButton } from "../offer/button/button";
import { EventCard } from "./card/card";
import { EventSwitch } from "./eventSwitch/eventSwitch";
import styles from "./events.module.scss";

export function Events() {
  return (
    <div className={styles.wrapper}>
      <SecondaryHeader id="wydarzenia">Wydarzenia</SecondaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="blue" active onClick={() => {}}>
          Obozy i kolonie
        </OfferButton>
        <OfferButton variant="green" onClick={() => {}}>
          Kursy i szkolenia
        </OfferButton>
        <OfferButton variant="lime" onClick={() => {}}>
          Turnusy zdrowotne
        </OfferButton>
      </div>
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
    </div>
  );
}

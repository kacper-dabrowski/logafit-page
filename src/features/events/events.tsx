"use client";

import { PrimaryHeader } from "@/features/shared/typography/headers";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "../offer/button/button";
import { Camps } from "./camps/camps";
import styles from "./events.module.scss";
import { Tab } from "./tab";
import { HealthTours } from "./healthTours/healthTours";

const eventPages: Record<Tab, JSX.Element> = {
  [Tab.Camps]: <Camps />,
  [Tab.HealthTours]: <HealthTours />,
};

export function Events() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.Camps);

  return (
    <div className={styles.wrapper}>
      <PrimaryHeader id="wydarzenia">Wydarzenia</PrimaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="blue" {...getNavigationProps(Tab.Camps)}>
          Obozy i kolonie
        </OfferButton>
        <OfferButton variant="lime" {...getNavigationProps(Tab.HealthTours)}>
          Turnusy zdrowotne
        </OfferButton>
      </div>
      {eventPages[activeTab]}
    </div>
  );
}

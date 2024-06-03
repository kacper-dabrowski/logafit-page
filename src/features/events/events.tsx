"use client";

import { SecondaryHeader } from "@/features/shared/typography/headers";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "../offer/button/button";
import { Camps } from "./camps/camps";
import styles from "./events.module.scss";
import { Tab } from "./tab";
import { Courses } from "./courses/courses";

const eventPages: Record<Tab, JSX.Element> = {
  [Tab.Camps]: <Camps />,
  [Tab.Courses]: <Courses />,
  [Tab.HealthResorts]: <div />,
};

export function Events() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.Camps);

  return (
    <div className={styles.wrapper}>
      <SecondaryHeader id="wydarzenia">Wydarzenia</SecondaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="blue" {...getNavigationProps(Tab.Camps)}>
          Obozy i kolonie
        </OfferButton>
        <OfferButton variant="green" {...getNavigationProps(Tab.Courses)}>
          Kursy i szkolenia
        </OfferButton>
        <OfferButton variant="lime" {...getNavigationProps(Tab.HealthResorts)}>
          Turnusy zdrowotne
        </OfferButton>
      </div>
      {eventPages[activeTab]}
    </div>
  );
}

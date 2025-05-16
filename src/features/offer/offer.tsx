"use client";

import { PrimaryHeader } from "@/features/shared/typography/headers";
import { useMemo } from "react";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "./button/button";

import { Event } from "../contentful/events/event.transformer";

import styles from "./offer.module.scss";
import { AquaFitnessOffer } from "./set/aquaFitness";
import { PhysicalTherapyOffer } from "./set/physicalTherapy";
import { SwimmingSchoolOffer } from "./set/swimmingSchool";
import { Tab } from "./tab";
import { EventTiles } from "./events/components/tiles";
import { OfferTab } from "./tab/tab";

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
  [Tab.Camps]: "Odkryj nasze obozy i kolonie",
};

export function Offer({ events }: { events: Event[] }) {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SwimmingSchool);
  const heading = useMemo(() => headings[activeTab], [activeTab]);

  return (
    <div>
      <PrimaryHeader id="oferta">Oferta</PrimaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton
          variant="green"
          {...getNavigationProps(Tab.SwimmingSchool)}
        >
          Szkoła pływania
        </OfferButton>
        <OfferButton variant="green" {...getNavigationProps(Tab.AquaFitness)}>
          Aqua Fitness
        </OfferButton>
        <OfferButton
          variant="green"
          {...getNavigationProps(Tab.PhysicalTherapy)}
        >
          Osteopatia
        </OfferButton>
        <OfferButton variant="blue" {...getNavigationProps(Tab.Camps)}>
          Obozy i kolonie
        </OfferButton>
      </div>
      <h2 className={styles.heading}>{heading}</h2>
      <OfferTab tab={Tab.SwimmingSchool} activeTab={activeTab}>
        <SwimmingSchoolOffer />
      </OfferTab>
      <OfferTab tab={Tab.AquaFitness} activeTab={activeTab}>
        <AquaFitnessOffer />
      </OfferTab>
      <OfferTab tab={Tab.PhysicalTherapy} activeTab={activeTab}>
        <PhysicalTherapyOffer />
      </OfferTab>
      <OfferTab tab={Tab.Camps} activeTab={activeTab}>
        <EventTiles events={events} />
      </OfferTab>
    </div>
  );
}

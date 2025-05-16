"use client";

import { PrimaryHeader } from "@/features/shared/typography/headers";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "./button/button";

import { Event } from "../contentful/events/event.transformer";
import { EventTiles } from "../events/components/tiles";
import styles from "./offer.module.scss";
import { AquaFitnessOffer } from "./set/aquaFitness";
import { PhysicalTherapyOffer } from "./set/physicalTherapy";
import { SwimmingSchoolOffer } from "./set/swimmingSchool";
import { Tab } from "./tab";

const cards: Record<Tab, (args: any) => JSX.Element> = {
  [Tab.SwimmingSchool]: () => <SwimmingSchoolOffer key={Tab.SwimmingSchool} />,
  [Tab.PhysicalTherapy]: () => (
    <PhysicalTherapyOffer key={Tab.PhysicalTherapy} />
  ),
  [Tab.AquaFitness]: () => <AquaFitnessOffer key={Tab.AquaFitness} />,
  [Tab.Camps]: (events: Event[]) => (
    <EventTiles key={Tab.Camps} events={events} />
  ),
};

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
  [Tab.Camps]: "",
};

export function Offer({ events }: { events: Event[] }) {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SwimmingSchool);

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
      <h2 className={styles.heading}>{headings[activeTab]}</h2>
      <div>{cards[activeTab](events)}</div>
      <div className={styles.hidden}>
        {Object.values(cards).map((value) => value(events))}
      </div>
    </div>
  );
}

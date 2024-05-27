"use client";

import { SecondaryHeader } from "@/features/shared/components/headers";
import { useState } from "react";
import { OfferButton } from "./button/button";
import { Card } from "./card/card";
import styles from "./offer.module.scss";
import { Tab } from "./tab";

const cards: Record<Tab, JSX.Element[]> = {
  [Tab.SwimmingSchool]: [
    <Card
      key="pływanie dla niemowląt"
      variant="azureBlue"
      src="/assets/plywanie_dla_niemowlat.png"
      alt="pływanie dla niemowląt"
      heading="Pływanie dla niemowląt"
    />,
    <Card
      key="pływanie dla dzieci"
      variant="plum"
      src="/assets/plywanie_dla_dzieci.png"
      alt="pływanie dla dzieci"
      heading="Pływanie dla dzieci"
    />,
  ],
  [Tab.PhysicalTherapy]: [
    <Card
      key="rehabilitacja w wodzie"
      variant="softTeal"
      src="/assets/couple-relaxing.png"
      alt="rehabilitacja w wodzie"
      heading="Rehabilitacja w wodzie"
    />,
    <Card
      key="pływanie korekcyjne"
      variant="tropicalCyan"
      src="/assets/baby-swimming.png"
      alt="pływanie korekcyjne"
      heading="Pływanie korekcyjne"
    />,
  ],
  [Tab.AquaFitness]: [
    <Card
      key="aqua fitness"
      variant="sunsetHorizon"
      src="/assets/aqua-fitness.png"
      alt="aqua fitness"
      heading="Aqua Fitness"
    />,
  ],
};

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz soje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
};

export function Offer() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.SwimmingSchool);
  const getNavigationProps = (tab: Tab) => {
    return {
      active: activeTab === tab,
      onClick: () => setActiveTab(tab),
    };
  };
  return (
    <div>
      <SecondaryHeader>Oferta</SecondaryHeader>
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
          Fizjoterapia
        </OfferButton>
      </div>
      <h2 className={styles.heading}>{headings[activeTab]}</h2>
      <div className={styles.cardsWrapper}>{cards[activeTab]}</div>
    </div>
  );
}

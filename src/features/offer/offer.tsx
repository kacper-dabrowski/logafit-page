"use client";

import { SecondaryHeader } from "@/features/shared/components/headers";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "./button/button";
import { Card, CardProps } from "./card/card";
import styles from "./offer.module.scss";
import { Tab } from "./tab";

const cards: Record<Tab, CardProps[]> = {
  [Tab.SwimmingSchool]: [
    {
      variant: "azureBlue",
      src: "/assets/plywanie_dla_niemowlat.png",
      alt: "pływanie dla niemowląt",
      heading: "Pływanie dla niemowląt",
    },
    {
      variant: "plum",
      src: "/assets/plywanie_dla_dzieci.png",
      alt: "pływanie dla dzieci",
      heading: "Pływanie dla dzieci",
    },
  ],
  [Tab.PhysicalTherapy]: [
    {
      variant: "softTeal",
      src: "/assets/couple-relaxing.png",
      alt: "rehabilitacja w wodzie",
      heading: "Rehabilitacja w wodzie",
    },
    {
      variant: "tropicalCyan",
      src: "/assets/baby-swimming.png",
      alt: "pływanie korekcyjne",
      heading: "Pływanie korekcyjne",
    },
  ],
  [Tab.AquaFitness]: [
    {
      variant: "sunsetHorizon",
      src: "/assets/aqua-fitness.png",
      alt: "aqua fitness",
      heading: "Aqua Fitness",
    },
  ],
};

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
};

export function Offer() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SwimmingSchool);

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
      <div className={styles.cardsWrapper}>
        {cards[activeTab].map((props) => (
          <Card {...props} key={props.heading} />
        ))}
      </div>
    </div>
  );
}

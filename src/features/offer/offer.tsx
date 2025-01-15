"use client";

import { PrimaryHeader } from "@/features/shared/typography/headers";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "./button/button";

import { Camps } from "../events/camps/camps";
import { HealthTours } from "../events/healthTours/healthTours";
import styles from "./offer.module.scss";
import { AquaFitnessOffer } from "./set/aquaFitness";
import { PhysicalTherapyOffer } from "./set/physicalTherapy";
import { SwimmingSchoolOffer } from "./set/swimmingSchool";
import { Tab } from "./tab";

const cards: Record<Tab, any> = {
  [Tab.SwimmingSchool]: [<SwimmingSchoolOffer key={Tab.SwimmingSchool} />],
  [Tab.PhysicalTherapy]: <PhysicalTherapyOffer key={Tab.PhysicalTherapy} />,
  [Tab.AquaFitness]: <AquaFitnessOffer key={Tab.AquaFitness} />,
  [Tab.Camps]: <Camps key={Tab.Camps} />,
  [Tab.HealthTours]: <HealthTours key={Tab.HealthTours} />,
};

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
  [Tab.Camps]: "",
  [Tab.HealthTours]: "",
};

const variants = {
  enter: { opacity: 0, x: -2000, delay: 0.65 },
  center: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 1000 },
};

export function Offer() {
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
        <OfferButton variant="lime" {...getNavigationProps(Tab.HealthTours)}>
          Turnusy zdrowotne
        </OfferButton>
      </div>
      <h2 className={styles.heading}>{headings[activeTab]}</h2>
      <div className={styles.animationWrapper}>
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {cards[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.hidden}>
        {Object.values(cards).map((value) => value)}
      </div>
    </div>
  );
}

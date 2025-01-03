"use client";

import { useNavigation } from "../../navigation/useNavigation";
import { OfferButton } from "../../offer/button/button";
import { GradientHeader } from "../../shared/typography/headers";
import { LocationPin, LocationPinProps } from "./locationPin/locationPin";
import styles from "./locations.module.scss";
import { Tab } from "./tab";

const locations: Record<Tab, LocationPinProps[]> = {
  [Tab.Swimming]: [
    {
      objectName: "Toruń - Copernicus Hotel",
      address: "Bulwar Filadelfijski",
      phoneNumbers: "607 880 086, 691 376 287",
    },
    {
      objectName: "Toruń MOSIR",
      address: "Generała Józefa Hallera 79",
      phoneNumbers: "607 880 086, 691 376 287",
    },
    {
      objectName: "Aqua Toruń",
      address: "ul. Bażyńskich 9",
      phoneNumbers: "607 880 086, 691 376 287",
    },
    {
      objectName: "Wielka Nieszawka - Olender",
      address: "ul. Toruńska 34/40",
      phoneNumbers: "607 880 086, 691 376 287",
    },
  ],
  [Tab.AquaFitness]: [
    {
      objectName: "Toruń UMK",
      address: "ul. Św. Józefa 17",
      phoneNumbers: "603 256 706",
      emailAddress: "aquafitness@logafit.pl",
    },
    {
      objectName: "Toruń - Copernicus Hotel",
      address: "Bulwar Filadelfijski",
      phoneNumbers: "603 256 706",
      emailAddress: "aquafitness@logafit.pl",
    },
  ],
  [Tab.PhysicalTherapy]: [
    {
      objectName: "Toruń, Przychodnia Zdrowa Rodzina",
      address: "Watzenrodego 15A",
      phoneNumbers: "56 307 09 56, 607 880 086",
      emailAddress: "rejestracja@zdrowarodzinatorun.pl",
    },
  ],
};

export function Locations() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.AquaFitness);

  return (
    <>
      <GradientHeader variant="blue">Gdzie jesteśmy?</GradientHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="skyBlue" {...getNavigationProps(Tab.Swimming)}>
          Pływanie
        </OfferButton>
        <OfferButton variant="skyBlue" {...getNavigationProps(Tab.AquaFitness)}>
          Aqua Fitness
        </OfferButton>
        <OfferButton
          variant="skyBlue"
          {...getNavigationProps(Tab.PhysicalTherapy)}
        >
          Osteopatia
        </OfferButton>
      </div>
      <div className={styles.pinsWrapper}>
        {locations[activeTab].map(({ ...props }) => (
          <LocationPin {...props} key={props.address} />
        ))}
      </div>
    </>
  );
}

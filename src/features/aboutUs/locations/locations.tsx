"use client";

import { deduplicateArray } from "../../../shared/array/deduplicate";
import { ServiceLocation } from "../../contentful/serviceLocations/serviceLocations.transformer";
import { useNavigation } from "../../navigation/useNavigation";
import { OfferButton } from "../../offer/button/button";
import { GradientHeader } from "../../shared/typography/headers";
import { LocationPin } from "./locationPin/locationPin";
import styles from "./locations.module.scss";

interface LocationsProps {
  locations: ServiceLocation[];
}

export function Locations({ locations }: LocationsProps) {
  const categories = deduplicateArray(locations.map((l) => l.category));

  const { getNavigationProps, activeTab } = useNavigation(categories[0]);

  return (
    <>
      <GradientHeader variant="blue">Gdzie jesteśmy?</GradientHeader>
      <div className={styles.buttonsWrapper}>
        {categories.map((category) => (
          <OfferButton
            key={category}
            variant="skyBlue"
            {...getNavigationProps(category)}
          >
            {category}
          </OfferButton>
        ))}
      </div>
      <div className={styles.pinsWrapper}>
        {locations.map((l) =>
          l.category === activeTab ? (
            <LocationPin key={l.title} list={l.list} />
          ) : null,
        )}
      </div>
    </>
  );
}

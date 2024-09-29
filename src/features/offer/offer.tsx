"use client";

import { PrimaryHeader } from "@/features/shared/typography/headers";
import { useNavigation } from "../navigation/useNavigation";
import { OfferButton } from "./button/button";

import { groupPagesByCategory, PageModel } from "../content/model/page";
import styles from "./offer.module.scss";
import { OfferSet } from "./set/set";
import { Tab } from "./tab";

function getCardsForCategory(pages: PageModel[], category: string) {
  const pageByCategory = groupPagesByCategory(pages);

  return pageByCategory[category].map((page) => ({
    src: page?.thumbnail?.url!,
    alt: page.thumbnail?.alt!,
    heading: page.title,
    variant: "blueGreen" as const,
    href: `/dowiedz-sie-wiecej/${page.pathname}`,
  }));
}

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
};

export function Offer({ pages }: { pages: PageModel[] }) {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SwimmingSchool);

  return (
    <div>
      <PrimaryHeader id="oferta">Oferta</PrimaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton
          variant="green"
          {...getNavigationProps(Tab.SwimmingSchool)}
        >
          {Tab.SwimmingSchool}
        </OfferButton>
        <OfferButton variant="green" {...getNavigationProps(Tab.AquaFitness)}>
          {Tab.AquaFitness}
        </OfferButton>
        <OfferButton
          variant="green"
          {...getNavigationProps(Tab.PhysicalTherapy)}
        >
          {Tab.PhysicalTherapy}
        </OfferButton>
        {/* <OfferButton variant="blue" {...getNavigationProps(Tab.Camps)}>
          Obozy i kolonie
        </OfferButton>
        <OfferButton variant="lime" {...getNavigationProps(Tab.HealthTours)}>
          Turnusy zdrowotne
        </OfferButton> */}
      </div>
      <h2 className={styles.heading}>{headings[activeTab]}</h2>
      <div>
        <OfferSet cards={getCardsForCategory(pages, activeTab)} />
      </div>
      <div className={styles.hidden}>
        {Object.values(getCardsForCategory).map((value) => value)}
      </div>
    </div>
  );
}

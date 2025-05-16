import clsx from "clsx";
import { useMemo } from "react";
import { Tab } from "../tab";
import styles from "./tab.module.scss";

interface OfferTabProps {
  tab: Tab;
  activeTab: Tab;
  children: React.ReactNode;
}

const headings: Record<Tab, string> = {
  [Tab.SwimmingSchool]: "Zapisz swoje dziecko na zajęcia",
  [Tab.AquaFitness]: "Zapisz się na zajęcia",
  [Tab.PhysicalTherapy]: "Zapisz siebie lub swoje dziecko na zajęcia",
  [Tab.Camps]: "Odkryj nasze obozy i kolonie",
};

export function OfferTab({ tab, activeTab, children }: OfferTabProps) {
  const heading = useMemo(() => headings[activeTab], [activeTab]);
  const tabClasses = clsx(styles.tabContainer, {
    [styles.hidden]: tab !== activeTab,
    [styles.active]: tab === activeTab,
  });

  return (
    <div className={tabClasses}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </div>
  );
}

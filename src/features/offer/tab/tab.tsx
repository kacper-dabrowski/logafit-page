import clsx from "clsx";
import { Tab } from "../tab";
import styles from "./tab.module.scss";

interface OfferTabProps {
  tab: Tab;
  activeTab: Tab;
  children: React.ReactNode;
}
export function OfferTab({ tab, activeTab, children }: OfferTabProps) {
  const tabClasses = clsx(styles.tabContainer, {
    [styles.hidden]: tab !== activeTab,
    [styles.active]: tab === activeTab,
  });

  return <div className={tabClasses}>{children}</div>;
}

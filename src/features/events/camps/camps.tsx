import { useNavigation } from "../../navigation/useNavigation";
import styles from "./camps.module.scss";
import { EventSwitch } from "./components/eventSwitch/eventSwitch";
import { SummerCamps } from "./summer/summerCamps";
import { Tab } from "./tab";
import { WinterCamps } from "./winter/winterCamps";

const eventPages: Record<Tab, JSX.Element> = {
  [Tab.WinterCamps]: <WinterCamps />,
  [Tab.SummerCamps]: <SummerCamps />,
};

export function Camps() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SummerCamps);
  const { tab, ...restProps } = getEventSwitchProps(activeTab);

  const allProps = { ...getNavigationProps(tab), ...restProps };

  return (
    <>
      <div className={styles.cardWrapper}>{eventPages[activeTab]}</div>
      <div className={styles.switchesWrapper}>
        <EventSwitch {...allProps}>
          {activeTab === Tab.WinterCamps
            ? "Wydarzenia zimowe"
            : "Wydarzenia letnie"}
        </EventSwitch>
      </div>
    </>
  );
}

function getEventSwitchProps(activeTab: Tab) {
  const variant: "blue" | "yellow" =
    activeTab === Tab.WinterCamps ? "blue" : "yellow";
  return {
    tab: activeTab === Tab.WinterCamps ? Tab.SummerCamps : Tab.WinterCamps,
    variant,
    iconSrc:
      activeTab === Tab.WinterCamps
        ? "/assets/cold-weather-icon.svg"
        : "/assets/sun-icon.svg",
    iconAltText: activeTab === Tab.WinterCamps ? "śnieżynka" : "słońce",
  };
}

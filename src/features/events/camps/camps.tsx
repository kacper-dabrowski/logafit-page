import { useNavigation } from "../../navigation/useNavigation";
import { SnowflakeIcon, SunIcon } from "../../shared/icons";
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
    renderIcon: () =>
      activeTab === Tab.WinterCamps ? (
        <SnowflakeIcon color="#4433B2" />
      ) : (
        <SunIcon color="#B28F33" />
      ),
    iconAltText: activeTab === Tab.WinterCamps ? "śnieżynka" : "słońce",
  };
}

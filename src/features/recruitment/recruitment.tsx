import { CalendarIcon, PinIcon, UserGroupIcon } from "../shared/icons";
import { SecondaryHeader } from "../shared/typography/headers";
import styles from "./recruitment.module.scss";

export function Recruitment() {
  return (
    <div className={styles.wrapper}>
      <SecondaryHeader>Nabór na sezon 2024/2025</SecondaryHeader>
      <div className={styles.container}>
        <CalendarIcon color="black" />
        od 15 sierpnia 2024
      </div>
      <div className={styles.container}>
        <PinIcon color="black" />
        <p>Basen w hotelu Copernicus,</p>
        <p>Aqua Toruń Bażyńskich,</p>
        <p>Olender Wielka Nieszawka</p>
      </div>
      <div className={styles.container}>
        <UserGroupIcon color="black" />
        <p>biuro@logafit.pl</p>
        <br />
        <p> tel. 607880086, 691376287</p>
      </div>
    </div>
  );
}

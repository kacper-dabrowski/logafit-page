import { SecondaryHeader } from "../shared/typography/headers";
import { RecruitmentCard } from "./card/card";
import styles from "./recruitment.module.scss";
import olenderPhoto from "../../../public/assets/olender.png";
import bazynskichPhoto from "../../../public/assets/bazynskich.png";
import copernicusHotelPhoto from "../../../public/assets/hotel_copernicus.png";
import halleraPhoto from "../../../public/assets/basen_hallera.avif";

export function Recruitment() {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <SecondaryHeader classNames={styles.heading}>
          Nabór na sezon 2024/2025
        </SecondaryHeader>
        <h3 className={styles.thirdLevelHeading}>od 15 sierpnia 2024</h3>
      </div>
      <div className={styles.wrapper}>
        <RecruitmentCard
          image={copernicusHotelPhoto}
          name="Basen Hotel Copernicus"
          variant="yellow"
        />
        <RecruitmentCard
          image={bazynskichPhoto}
          name="Aqua Toruń Bażyńskich"
          variant="lightBlue"
        />
        <RecruitmentCard
          image={olenderPhoto}
          name="Olender Wielka Nieszawka"
          variant="red"
        />
        <RecruitmentCard
          image={halleraPhoto}
          name="Mini Aqua Park Hallera"
          variant="yellow"
        />
      </div>
      <h2 className={styles.secondLevelHeading}>Skontaktuj się z nami</h2>
    </div>
  );
}

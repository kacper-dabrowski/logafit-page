import Link from "next/link";
import { PrimaryHeader } from "../shared/typography/headers";
import { WhereAreWeCard } from "./card/card";
import { InfoBox } from "./infoBox/infoBox";
import styles from "./whereAreWe.module.scss";
import olenderPhoto from "../../../public/assets/olender.png";
import bazynskichPhoto from "../../../public/assets/bazynskich.png";
import copernicusHotelPhoto from "../../../public/assets/hotel_copernicus.png";
import halleraPhoto from "../../../public/assets/basen_hallera.avif";

export function WhereAreWe() {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <PrimaryHeader classNames={styles.heading}>
          Miejsca realizacji zajęć
        </PrimaryHeader>
      </div>
      <div className={styles.wrapper}>
        <WhereAreWeCard
          image={copernicusHotelPhoto}
          name="Basen Hotel Copernicus"
          variant="lightBlue"
        />
        <WhereAreWeCard
          image={bazynskichPhoto}
          name="Aqua Toruń Bażyńskich"
          variant="red"
        />
        <WhereAreWeCard
          image={olenderPhoto}
          name="Olender Wielka Nieszawka"
          variant="green"
        />
        <WhereAreWeCard
          image={halleraPhoto}
          name="Mini Aqua Park Hallera"
          variant="yellow"
        />
      </div>
      <h2 className={styles.secondLevelHeading}>Skontaktuj się z nami</h2>
      <div className={styles.contact}>
        <Link href="tel:607880086" className={styles.contactLink}>
          <p className={styles.contactText}>Telefonicznie</p>
          <InfoBox
            text="607 880 086 oraz 691 376 287"
            separator="oraz"
            variant="green"
          />
        </Link>
        <Link href="mailto:biuro@logafit.pl" className={styles.contactLink}>
          <p className={styles.contactText}>Mailowo</p>
          <InfoBox text="biuro@logafit.pl" variant="skyBlue" />
        </Link>
      </div>
    </div>
  );
}

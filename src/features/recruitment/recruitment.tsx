import Image from "next/image";
import Link from "next/link";
import { PrimaryHeader } from "../shared/typography/headers";
import { RecruitmentCard } from "./card/card";
import styles from "./recruitment.module.scss";
import olenderPhoto from "../../../public/assets/olender.png";
import bazynskichPhoto from "../../../public/assets/bazynskich.png";
import copernicusHotelPhoto from "../../../public/assets/hotel_copernicus.png";
import halleraPhoto from "../../../public/assets/basen_hallera.avif";
import phoneContact from "../../../public/assets/recruitment_contact_phone.png";
import emailContact from "../../../public/assets/recruitment_contact_mail.png";

export function Recruitment() {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <PrimaryHeader classNames={styles.heading}>
          Nabór na sezon 2024/2025
        </PrimaryHeader>
        <h3 className={styles.thirdLevelHeading}>od 15 sierpnia 2024</h3>
      </div>
      <div className={styles.wrapper}>
        <RecruitmentCard
          image={copernicusHotelPhoto}
          name="Basen Hotel Copernicus"
          variant="lightBlue"
        />
        <RecruitmentCard
          image={bazynskichPhoto}
          name="Aqua Toruń Bażyńskich"
          variant="red"
        />
        <RecruitmentCard
          image={olenderPhoto}
          name="Olender Wielka Nieszawka"
          variant="green"
        />
        <RecruitmentCard
          image={halleraPhoto}
          name="Mini Aqua Park Hallera"
          variant="yellow"
        />
      </div>
      <h2 className={styles.secondLevelHeading}>Skontaktuj się z nami</h2>
      <div className={styles.contact}>
        <Link href="tel:607880086" className={styles.contactLink}>
          <p className={styles.contactText}>Telefonicznie</p>
          <Image
            className={styles.contactImage}
            src={phoneContact}
            alt="607 880 086 lub 691 376 287"
          />
        </Link>
        <Link href="mailto:biuro@logafit.pl" className={styles.contactLink}>
          <p className={styles.contactText}>Mailowo</p>
          <Image
            src={emailContact}
            alt="biuro@logafit.pl"
            className={styles.contactImage}
          />
        </Link>
      </div>
    </div>
  );
}

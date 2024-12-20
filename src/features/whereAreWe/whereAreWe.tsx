import Image from "next/image";
import Link from "next/link";
import emailContact from "../../../public/assets/recruitment_contact_mail.png";
import phoneContact from "../../../public/assets/recruitment_contact_phone.png";
import { FeaturedVenue } from "../contentful/featuredVenues/featuredVenue.transformer";
import { PrimaryHeader } from "../shared/typography/headers";
import { WhereAreWeCard } from "./card/card";
import styles from "./whereAreWe.module.scss";

interface WhereAreWeProps {
  entries: FeaturedVenue[];
}

export function WhereAreWe({ entries }: WhereAreWeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <PrimaryHeader classNames={styles.heading}>
          Miejsca realizacji zajęć
        </PrimaryHeader>
      </div>
      <div className={styles.wrapper}>
        {entries.map((entry) => (
          <WhereAreWeCard
            image={`https:${entry.image.fields.file.url}`}
            name={entry.name}
            key={entry.name}
            backgroundColor={entry.backgroundColor}
            textColor={entry.textColor}
          />
        ))}
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

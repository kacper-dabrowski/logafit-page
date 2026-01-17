import Link from "next/link";
import { FeaturedVenue } from "../contentful/featuredVenues/featuredVenue.transformer";
import { PrimaryHeader } from "../shared/typography/headers";
import { WhereAreWeCard } from "./card/card";
import { InfoBox } from "./infoBox/infoBox";
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
            image={entry.image.fields.file.url}
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

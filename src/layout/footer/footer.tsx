import { ContactInfo } from "../../features/contact/contactInfo";
import { IconTile, LinkTarget } from "../../features/contact/iconTile";
import { SecondaryHeader } from "../../features/shared/components/headers";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <SecondaryHeader>Kontakt</SecondaryHeader>
      <ContactInfo />
      <div className={styles.iconsWrapper}>
        <IconTile
          href="tel:691-376-287"
          imgAlt="ikona telefonu"
          imgSrc="/assets/phone-call.svg"
          content="691 376 287"
        />
        <IconTile
          href="mailto:biuro@logafit.pl"
          imgAlt="ikona koperty"
          imgSrc="/assets/envelope.svg"
          content="biuro@logafit.pl"
        />
        <IconTile
          href="https://facebook.com/logafit"
          imgAlt="ikona facebooka"
          imgSrc="/assets/facebook-icon.svg"
          content="facebook.com/logafit"
          target={LinkTarget.BlankPage}
        />
      </div>
    </div>
  );
}

import { ContactInfo } from "../../features/contact/info/contactInfo";
import { InfoIcon, LinkTarget } from "../../features/contact/icon/infoIcon";
import { SecondaryHeader } from "../../features/shared/components/headers";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <SecondaryHeader>Kontakt</SecondaryHeader>
      <ContactInfo />
      <div className={styles.iconsWrapper}>
        <InfoIcon
          href="tel:691-376-287"
          imgAlt="ikona telefonu"
          imgSrc="/assets/phone-call.svg"
          content="691 376 287"
        />
        <InfoIcon
          href="mailto:biuro@logafit.pl"
          imgAlt="ikona koperty"
          imgSrc="/assets/envelope.svg"
          content="biuro@logafit.pl"
        />
        <InfoIcon
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

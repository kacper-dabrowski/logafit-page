import Image from "next/image";
import desktopImage from "../../../public/assets/header.png";
import mobileImage from "../../../public/assets/header_mobile.png";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerMobile}>
        <div className={styles.background} />
        <Image
          src={mobileImage}
          width={774}
          height={500}
          quality={100}
          alt="nagłówek mobilny"
          priority
          className={styles.headerImage}
          sizes="(max-width: 1024px) 100vw, 774px"
          placeholder="empty"
        />
      </div>

      <div className={styles.header}>
        <div className={styles.background} />
        <Image
          src={desktopImage}
          width={936}
          height={500}
          quality={100}
          alt="nagłówek"
          priority
          className={styles.headerImage}
          sizes="(max-width: 1024px) 100vw, 936px"
          placeholder="empty"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.background} />
        <Image
          src="/assets/header.png"
          width={936}
          height={500}
          alt="nagłówek"
          quality={100}
          priority
        />
      </div>
      <div className={styles.headerMobile}>
        <div className={styles.background} />
        <Image
          src="/assets/header_mobile.png"
          width={774}
          height={500}
          quality={100}
          alt="nagłówek mobilny"
          priority
        />
      </div>
    </div>
  );
}

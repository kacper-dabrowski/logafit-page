import Image from "next/image";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.background} />
        <Image
          src="/assets/header.svg"
          width={1000}
          height={500}
          alt="nagłówek"
        />
      </div>
      <div className={styles.headerMobile}>
        <div className={styles.background} />

        <Image
          src="/assets/header_mobile.svg"
          width={768}
          height={500}
          alt="nagłówek mobilny"
        />
      </div>
    </div>
  );
}

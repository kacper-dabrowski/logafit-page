import Image from "next/image";
import { Metadata } from "next";
import styles from "./header.module.scss";
import { dynamicBlurDataUrl } from "../../shared/images/blur";

const mobileImageUrl =
  "https://images.ctfassets.net/t01f4dq06ywt/IDl8hmN3OQTFaR4yHUT7p/c3a94793ec072cb923d0287a77dd75af/header_mobile.png?w=774&h=500&q=75";
const desktopImageUrl =
  "https://images.ctfassets.net/t01f4dq06ywt/3y6iVfhclFljo3KmyhMyhF/23cf2312ac45fa1623b7b3738a8c5c13/header.png?w=936&h=500&q=75";

export async function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerMobile}>
        <div className={styles.background} />
        <Image
          src={mobileImageUrl}
          width={774}
          height={500}
          quality={100}
          alt="nagłówek mobilny"
          priority
          className={styles.headerImage}
          sizes="(max-width: 1024px) 100vw, 774px"
          placeholder="blur"
          blurDataURL={await dynamicBlurDataUrl(mobileImageUrl)}
        />
      </div>

      <div className={styles.header}>
        <div className={styles.background} />
        <Image
          src={desktopImageUrl}
          width={936}
          height={500}
          quality={100}
          alt="nagłówek"
          priority
          className={styles.headerImage}
          sizes="(max-width: 1024px) 100vw, 936px"
          placeholder="blur"
          blurDataURL={await dynamicBlurDataUrl(desktopImageUrl)}
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  other: {
    "link-preload": ["/assets/header.png", "/assets/header_mobile.png"],
  },
};

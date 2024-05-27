import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./card.module.scss";
import { ResponsiveImage } from "../../shared/responsiveImage/responsiveImage";

interface CardProps {
  src: string;
  alt: string;
  heading: string;
  variant: "softTeal" | "azureBlue" | "plum" | "tropicalCyan" | "sunsetHorizon";
}

export function Card({ src, alt, heading, variant }: CardProps) {
  const containerClasses = clsx(styles.container, styles[variant]);

  return (
    <div className={containerClasses}>
      <Image
        src={src}
        width={250}
        height={190}
        alt={alt}
        className={styles.image}
      />
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{heading}</h3>
        </div>
        <Link href="/#" className={styles.link}>
          <div className={styles.learnMore}>
            <p>Dowiedz się więcej</p>
            {src ? (
              <ResponsiveImage
                src="/assets/arrow-right-black.svg"
                alt="strzałka w prawo"
                width={{ mobile: 12, desktop: 24 }}
                height={{ mobile: 12, desktop: 24 }}
              />
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
}

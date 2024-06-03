import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./card.module.scss";
import { ResponsiveImage } from "../responsiveImage/responsiveImage";

export interface CardProps {
  heading: string;
  variant:
    | "softTeal"
    | "azureBlue"
    | "plum"
    | "tropicalCyan"
    | "sunsetHorizon"
    | "beachSand"
    | "blueGreen"
    | "turquoisePurple";
  href: string;
}

export interface CardWithImageProps extends CardProps {
  src: string;
  alt: string;
}

export function Card({ href, heading, variant }: CardProps) {
  const containerClasses = clsx(styles.container, styles[variant]);

  return (
    <Link href={href}>
      <div className={containerClasses}>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>{heading}</h3>
          </div>

          <div className={styles.learnMore}>
            <p>Dowiedz się więcej</p>
            <ResponsiveImage
              src="/assets/arrow-right-black.svg"
              alt="strzałka w prawo"
              width={{ mobile: 12, desktop: 24 }}
              height={{ mobile: 12, desktop: 24 }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CardWithImage({
  src,
  alt,
  heading,
  variant,
  href,
}: CardWithImageProps) {
  const containerClasses = clsx(
    styles.container,
    styles.withImage,
    styles[variant],
  );

  return (
    <Link href={href} className={styles.link}>
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
          <div className={styles.learnMore}>
            <p>Dowiedz się więcej</p>
            <ResponsiveImage
              src="/assets/arrow-right-black.svg"
              alt="strzałka w prawo"
              width={{ mobile: 12, desktop: 24 }}
              height={{ mobile: 12, desktop: 24 }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

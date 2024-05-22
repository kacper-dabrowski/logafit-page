import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import styles from "./card.module.scss";
import { ResponsiveImage } from "../../shared/responsiveImage/responsiveImage";

interface CardProps {
  headerText: string;
  contentText: string;
  learnMoreUrl: string;
  variant: "ocean" | "teal";
  imageSrc: string;
}

export function Card({
  headerText,
  contentText,
  learnMoreUrl,
  variant,
  imageSrc,
}: CardProps) {
  const containerClasses = clsx(
    styles.container,
    styles[`background-${variant}`],
  );
  const learnMoreClasses = clsx(styles.learnMore, styles[`color-${variant}`]);

  return (
    <div className={containerClasses}>
      <div className={styles.imageContainer}>
        <Image alt={headerText} src={imageSrc} width={202} height={151} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <h3 className={styles.heading}>{headerText}</h3>
        </div>
        <div>
          <p className={styles.text}>{contentText}</p>
        </div>
        <Link className={learnMoreClasses} href={learnMoreUrl}>
          <span>Dowiedz się więcej</span>
          <ResponsiveImage
            src="/assets/arrow-right.svg"
            alt="strzałka w prawo"
            width={{ mobile: 12, desktop: 24 }}
            height={{ mobile: 12, desktop: 24 }}
          />
        </Link>
      </div>
    </div>
  );
}

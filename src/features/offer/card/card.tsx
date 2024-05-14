import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import styles from "./card.module.scss";

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
          <Image
            className={styles.arrowMobile}
            src="/assets/arrow-right.svg"
            alt="strzałka w prawo"
            width={12}
            height={12}
          />
          <Image
            className={styles.arrowDesktop}
            src="/assets/arrow-right.svg"
            alt="strzałka w prawo"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
}

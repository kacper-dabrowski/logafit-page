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
        <h3 className={styles.heading}>{headerText}</h3>
        <p className={styles.text}>{contentText}</p>
        <Link className={learnMoreClasses} href={learnMoreUrl}>
          <span>Dowiedz się więcej</span>
          <Image
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

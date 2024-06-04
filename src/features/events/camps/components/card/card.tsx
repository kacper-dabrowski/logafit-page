import clsx from "clsx";
import Image from "next/image";
import styles from "./card.module.scss";

interface EventCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  renderDates: () => JSX.Element;
  renderLocation: () => JSX.Element;
  renderAge: () => JSX.Element;

  type: "winter" | "summer";
}

export function EventCard({
  type,
  title,
  renderAge,
  renderDates,
  renderLocation,
  imageAlt,
  imageSrc,
}: EventCardProps) {
  const containerClasses = clsx(styles.card, {
    [styles.blue]: type === "winter",
    [styles.yellow]: type === "summer",
  });
  const iconSrc =
    type === "winter"
      ? "/assets/cold-weather-icon.svg"
      : "/assets/sun-icon.svg";

  const iconAlt = type === "winter" ? "śniezynka" : "słoneczko";
  const badgeTitle = type === "winter" ? "Zima 2024" : "Lato 2024";

  return (
    <div className={containerClasses}>
      <div className={styles.topSection}>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.badge}>
          <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
          {badgeTitle}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div>
          <div className={styles.textWrapper}>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/calendar-icon.svg"
                width={16}
                height={16}
                alt="ikona kalendarza"
              />
              {renderDates()}
            </div>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/pin-icon.svg"
                width={16}
                height={16}
                alt="ikona pinezki"
              />
              {renderLocation()}
            </div>
            <div className={styles.textWithIcon}>
              <Image
                src="/assets/group-icon.svg"
                width={16}
                height={16}
                alt="grupa ludzi"
              />
              {renderAge()}
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={imageSrc}
            width={202}
            height={150}
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
}

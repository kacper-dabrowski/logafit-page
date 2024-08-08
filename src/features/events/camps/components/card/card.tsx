import clsx from "clsx";
import {
  CalendarIcon,
  PinIcon,
  SnowflakeIcon,
  SunIcon,
  UserGroupIcon,
} from "../../../../shared/icons";
import styles from "./card.module.scss";

interface EventCardProps {
  title: string;
  // eslint-disable-next-line react/no-unused-prop-types
  imageSrc: string;
  // eslint-disable-next-line react/no-unused-prop-types
  imageAlt: string;
  renderDates: () => JSX.Element;
  renderLocation: () => JSX.Element;
  renderAge: () => JSX.Element;

  type: "winter" | "summer" | "healthTour";
}

const colorToType: Record<EventCardProps["type"], string> = {
  winter: "#4433B2",
  summer: "#B28F33",
  healthTour: "#7E6407",
};

export function EventCard({
  type,
  title,
  renderAge,
  renderDates,
  renderLocation,
}: EventCardProps) {
  const containerClasses = clsx(styles.card, {
    [styles.blue]: type === "winter",
    [styles.yellow]: type === "summer",
    [styles.lemonchiffon]: type === "healthTour",
  });

  const color = colorToType[type];
  const icon =
    type === "winter" ? (
      <SnowflakeIcon color={color} />
    ) : (
      <SunIcon color={color} />
    );

  const badgeTitle = type === "winter" ? "Zima 2024" : "Lato 2024";

  return (
    <div className={containerClasses}>
      <div className={styles.topSection}>
        <h2 className={styles.heading}>{title}</h2>
        {type === "healthTour" ? null : (
          <div className={styles.badge}>
            {icon}
            {badgeTitle}
          </div>
        )}
      </div>
      <div className={styles.bottomSection}>
        <div>
          <div className={styles.textWrapper}>
            <div className={styles.textWithIcon}>
              <CalendarIcon color={color} />
              {renderDates()}
            </div>
            <div className={styles.textWithIcon}>
              <PinIcon color={color} />
              {renderLocation()}
            </div>
            <div className={styles.textWithIcon}>
              <UserGroupIcon color={color} />
              {renderAge()}
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          {/* <Image
            className={styles.image}
            src={imageSrc}
            width={202}
            height={150}
            alt={imageAlt}
          /> */}
        </div>
      </div>
    </div>
  );
}

import clsx from "clsx";
import Link from "next/link";
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
  detailsUrl?: string;

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
  detailsUrl,
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

  const badgeTitle = type === "winter" ? "Zima 2025" : "Lato 2025";

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
            {detailsUrl ? (
              <div>
                <Link href={detailsUrl} className={styles.link} target="_blank">
                  Szczegóły
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

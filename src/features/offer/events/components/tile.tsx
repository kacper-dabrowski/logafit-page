import { Event } from "@/features/contentful/events/event.transformer";
import type { JSX } from "react";
import styles from "./tile.module.scss";
import { CalendarIcon, PinIcon, UserGroupIcon } from "../../../shared/icons";
import { EventButton } from "./button";

export function EventTile({ event }: { event: Event }) {
  return (
    <div className={styles.container} style={{ backgroundColor: event.color }}>
      <div className={styles.emojiHeader}>
        <div className={styles.emoji}>{event.emoji}</div>
        <h3 className={styles.eventName}>{event.eventName}</h3>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.dates}>
          <WithIcon icon={<CalendarIcon color={event.accentColor} />}>
            {event.dates.map((date) => (
              <p key={date} className={styles.text}>
                {date}
              </p>
            ))}
          </WithIcon>
        </div>
        <WithIcon icon={<PinIcon color={event.accentColor} />}>
          <p className={styles.text}>{event.location}</p>
        </WithIcon>
        <WithIcon icon={<UserGroupIcon color={event.accentColor} />}>
          <p className={styles.text}>{event.participants}</p>
        </WithIcon>
      </div>
      <div className={styles.buttonContainer}>
        <EventButton event={event} />
      </div>
    </div>
  );
}

function WithIcon({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: JSX.Element;
}) {
  return (
    <div className={styles.withIcon}>
      <div className={styles.icon}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

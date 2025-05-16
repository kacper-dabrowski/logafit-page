import { Event } from "../../contentful/events/event.transformer";
import { EventTile } from "./tile";
import styles from "./tiles.module.scss";

export function EventTiles({ events }: { events: Event[] }) {
  return (
    <div className={styles.container}>
      {events.map((event) => (
        <EventTile key={event.eventName} event={event} />
      ))}
    </div>
  );
}

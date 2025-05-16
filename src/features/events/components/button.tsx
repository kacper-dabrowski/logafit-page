import Link from "next/link";
import { ArrowIcon } from "../../shared/icons";
import styles from "./button.module.scss";
import { Event } from "../../contentful/events/event.transformer";

export function EventButton({ event }: { event: Event }) {
  return (
    <Link href={`/wydarzenia/${event.slug}`}>
      <button type="button" className={styles.button}>
        Szczegóły
        <span className={styles.arrow}>
          <ArrowIcon color="#000" />
        </span>
      </button>
    </Link>
  );
}

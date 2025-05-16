import { ArrowIcon } from "../../shared/icons";
import styles from "./button.module.scss";

export function EventButton() {
  return (
    <button type="button" className={styles.button}>
      Szczegóły
      <span className={styles.arrow}>
        <ArrowIcon color="#000" />
      </span>
    </button>
  );
}

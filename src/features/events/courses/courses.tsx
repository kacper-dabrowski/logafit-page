import { Card } from "../../shared/card/card";
import styles from "./course.module.scss";

export function Courses() {
  return (
    <div className={styles.cardsWrapper}>
      <Card
        href="/dowiedz-sie-wiecej/koncepcja-halliwick"
        heading="Koncepcja Halliwick®"
        variant="turquoisePurple"
      />
      <Card
        href="/dowiedz-sie-wiecej/watsu-basic"
        heading="Kurs WATSU® Basic"
        variant="beachSand"
      />
      <Card
        href="/dowiedz-sie-wiecej/aqua-fitness"
        heading="Aqua Fitness"
        variant="blueGreen"
      />
    </div>
  );
}

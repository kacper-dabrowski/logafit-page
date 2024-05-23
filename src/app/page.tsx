import { AboutUs } from "../features/aboutUs/aboutUs";
import { Events } from "../features/events/events";
import { Offer } from "../features/offer/offer";
import { Header } from "../layout/header/header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.background} />
        <Offer />
        <Events />
      </div>
      <AboutUs />
    </div>
  );
}

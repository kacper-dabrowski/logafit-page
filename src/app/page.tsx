import { AboutUs } from "../features/aboutUs/aboutUs";
import { contentfulContentService } from "../features/content/contentful/service";
import { Offer } from "../features/offer/offer";
import { WhereAreWe } from "../features/whereAreWe/whereAreWe";
import { Header } from "../layout/header/header";
import styles from "./page.module.scss";

export default async function Home() {
  const pages = await contentfulContentService.getPages();

  return (
    <div>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.background} />
        <div className={styles.wrapper}>
          <Offer pages={pages} />
          <WhereAreWe />
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

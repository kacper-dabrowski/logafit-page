import { AboutUs } from "../features/aboutUs/aboutUs";
import { featuredVenueTransformer } from "../features/contentful/featuredVenues/featuredVenue.transformer";
import {
  AvailableEntity,
  contentfulClientService,
} from "../features/contentful/service/service";
import { serviceLocationsTransformer } from "../features/contentful/serviceLocations/serviceLocations.transformer";
import { byOrder } from "../features/contentful/sorting/sorting";
import { Offer } from "../features/offer/offer";
import { WhereAreWe } from "../features/whereAreWe/whereAreWe";
import { Header } from "../layout/header/header";
import styles from "./page.module.scss";

export default async function Home() {
  const featuredVenuesEntries = await contentfulClientService.getEntries(
    AvailableEntity.FeaturedVenues,
  );

  const featuredVenues = featuredVenueTransformer
    .transformMany(featuredVenuesEntries)
    .sort(byOrder);

  const availableLocations = serviceLocationsTransformer
    .transformMany(
      await contentfulClientService.getEntries(AvailableEntity.Locations),
    )
    .sort(byOrder);

  return (
    <div>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.background} />
        <div className={styles.wrapper}>
          <Offer />
          <WhereAreWe entries={featuredVenues} />
        </div>
      </div>
      <AboutUs locations={availableLocations} />
    </div>
  );
}

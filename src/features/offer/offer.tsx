import { SecondaryHeader } from "@/features/shared/components/headers";
import { OfferButton } from "./button/button";
import styles from "./offer.module.scss";
import { Card } from "./card/card";

export function Offer() {
  return (
    <div>
      <SecondaryHeader>Oferta</SecondaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="green" active>
          Szkoła pływania
        </OfferButton>
        <OfferButton variant="green">Aqua Fitness</OfferButton>
        <OfferButton variant="green">Fizjoterapia</OfferButton>
      </div>
      <h2 className={styles.heading}>Zapisz swoje dziecko na zajęcia</h2>
      <div className={styles.cardsWrapper}>
        <Card
          variant="azureBlue"
          src="/assets/plywanie_dla_niemowlat.png"
          alt="pływanie dla niemowląt"
          heading="Pływanie dla niemowląt"
        />
        <Card
          variant="plum"
          src="/assets/plywanie_dla_dzieci.png"
          alt="pływanie dla dzieci"
          heading="Pływanie dla dzieci"
        />
      </div>
    </div>
  );
}

import { OfferButton } from "./button/button";
import { Card } from "./card/card";
import styles from "./offer.module.scss";

export function Offer() {
  return (
    <div>
      <h2>Oferta</h2>
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
          variant="ocean"
          headerText="Pływanie dla niemowląt"
          contentText="Pływanie niemowląt polega na wspomaganiu naturalnego rozwoju dziecka, bazowaniu na odruchach z życia płodowego i ich podtrzymywaniu."
          learnMoreUrl="#"
          imageSrc="/assets/plywanie_dla_niemowlat.png"
        />
        <Card
          variant="teal"
          headerText="Pływanie dla dzieci"
          contentText="Uczymy pływania zarówno u najmłodszych dzieci jak i u starszych. Od oswojenia dzieci z wodą po doskonalenie ich umiejętności pływackich."
          learnMoreUrl="#"
          imageSrc="/assets/plywanie_dla_dzieci.png"
        />
      </div>
    </div>
  );
}

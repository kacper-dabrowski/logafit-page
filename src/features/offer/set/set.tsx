import { CardWithImage, CardWithImageProps } from "../../shared/card/card";
import styles from "./set.module.scss";

interface OfferSetProps {
  cards: CardWithImageProps[];
}
export function OfferSet({ cards }: OfferSetProps) {
  return (
    <div className={styles.cardsWrapper}>
      {cards.map((props) => (
        <CardWithImage key={props.heading} {...props} />
      ))}
    </div>
  );
}

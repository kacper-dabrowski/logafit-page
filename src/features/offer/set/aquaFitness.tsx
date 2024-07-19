import { CardWithImageProps } from "../../shared/card/card";
import { OfferSet } from "./set";

const aquaFitnessTiles: CardWithImageProps[] = [
  {
    href: "/dowiedz-sie-wiecej/aqua-fitness",
    variant: "sunsetHorizon",
    src: "/assets/aqua-fitness.png",
    alt: "aqua fitness",
    heading: "Aqua Fitness",
  },
];

export function AquaFitnessOffer() {
  return <OfferSet cards={aquaFitnessTiles} />;
}

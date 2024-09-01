import { CardWithImageProps } from "../../shared/card/card";
import { OfferSet } from "./set";

const physicalTherapyTiles: CardWithImageProps[] = [
  {
    href: "/dowiedz-sie-wiecej/rehabilitacja-w-wodzie",
    variant: "softTeal",
    src: "/assets/couple-relaxing.png",
    alt: "terapia w wodzie",
    heading: "Terapia w wodzie",
  },
  {
    href: "/dowiedz-sie-wiecej/osteopatia",
    variant: "tropicalCyan",
    src: "/assets/physiotherapy_baby.jpeg",
    alt: "osteopatia",
    heading: "Osteopatia",
  },
] as const;

export function PhysicalTherapyOffer() {
  return <OfferSet cards={physicalTherapyTiles} />;
}

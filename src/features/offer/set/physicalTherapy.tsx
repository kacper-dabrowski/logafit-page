import { CardWithImageProps } from "../../shared/card/card";
import { OfferSet } from "./set";

const physicalTherapyTiles: CardWithImageProps[] = [
  {
    href: "/dowiedz-sie-wiecej/rehabilitacja-w-wodzie",
    variant: "softTeal",
    src: "/assets/couple-relaxing.png",
    alt: "rehabilitacja w wodzie",
    heading: "Rehabilitacja w wodzie",
  },
  {
    href: "/dowiedz-sie-wiecej/osteopatia",
    variant: "tropicalCyan",
    src: "/assets/baby-swimming.png",
    alt: "osteopatia",
    heading: "Osteopatia",
  },
] as const;

export function PhysicalTherapyOffer() {
  return <OfferSet cards={physicalTherapyTiles} />;
}

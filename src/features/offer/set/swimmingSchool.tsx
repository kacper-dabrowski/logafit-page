import { CardWithImageProps } from "../../shared/card/card";
import { OfferSet } from "./set";

const swimmingSchoolTiles: CardWithImageProps[] = [
  {
    href: "/dowiedz-sie-wiecej/plywanie-dla-niemowlat",
    variant: "azureBlue",
    src: "/assets/plywanie_dla_niemowlat.png",
    alt: "pływanie dla niemowląt",
    heading: "Pływanie dla niemowląt",
  },
  {
    href: "/dowiedz-sie-wiecej/plywanie-dla-dzieci",
    variant: "plum",
    src: "/assets/plywanie_dla_dzieci.png",
    alt: "pływanie dla dzieci",
    heading: "Pływanie dla dzieci",
  },
  {
    href: "/dowiedz-sie-wiecej/plywanie-korekcyjne",
    variant: "tropicalCyan",
    src: "/assets/baby-swimming.png",
    alt: "pływanie korekcyjne",
    heading: "Pływanie korekcyjne",
  },
];
export function SwimmingSchoolOffer() {
  return <OfferSet cards={swimmingSchoolTiles} />;
}

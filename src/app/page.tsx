import { AboutUs } from "../features/aboutUs/aboutUs";
import { Events } from "../features/events/events";
import { Offer } from "../features/offer/offer";

export default function Home() {
  return (
    <div>
      <Offer />
      <Events />
      <AboutUs />
    </div>
  );
}

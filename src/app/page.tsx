import { AboutUs } from "../features/aboutUs/aboutUs";
import { Events } from "../features/events/events";
import { Offer } from "../features/offer/offer";
import { Header } from "../layout/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Offer />
      <Events />
      <AboutUs />
    </div>
  );
}

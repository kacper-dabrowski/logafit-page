import { EventCard } from "../components/card/card";

export function SummerCamps() {
  return (
    <EventCard
      title="Półkolonie pływackie"
      imageSrc="/assets/kids-having-fun.png"
      imageAlt="dzieci z napojami"
      renderDates={() => (
        <p>
          I - 3-7.07.2024
          <br /> II - 17-21.07.2024
        </p>
      )}
      renderLocation={() => (
        <p>Hotel Copernicus Toruń; Bulwar Filadelfijski 11</p>
      )}
      renderAge={() => (
        <p>
          dzieci <br /> w wieku 6 – 12 lat
        </p>
      )}
      type="summer"
    />
  );
}

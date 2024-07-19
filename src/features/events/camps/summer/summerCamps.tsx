import { EventCard } from "../components/card/card";

export function SummerCamps() {
  return (
    <div>
      <EventCard
        title="Półkolonie pływackie"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => (
          <p>
            I- 1-5.07.2024 <br /> II – 8-12.07.2024
          </p>
        )}
        renderLocation={() => (
          <p>
            Hotel Copernicus Toruń
            <br /> Bulwar Filadelfijski 11
          </p>
        )}
        renderAge={() => (
          <p>
            dzieci <br /> w wieku 6 – 12 lat
          </p>
        )}
        type="summer"
      />
      <EventCard
        title="Logafit Camp Darłówko"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => <p>1-8.08.2024</p>}
        renderLocation={() => (
          <p>
            OW Gniewko, <br />
            Darłówko Wschodnie Słowiańska 26
          </p>
        )}
        renderAge={() => (
          <p>
            dzieci <br /> w wieku 6 – 12 lat
          </p>
        )}
        type="summer"
      />
      <EventCard
        title="Logafit Camp Kamienica"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => <p>1-8.08.2024</p>}
        renderLocation={() => (
          <p>
            Wioska Surfera, <br /> Kamienica 6, Kamienica
          </p>
        )}
        renderAge={() => (
          <p>
            dzieci <br /> w wieku 6 – 12 lat
          </p>
        )}
        type="summer"
      />
    </div>
  );
}

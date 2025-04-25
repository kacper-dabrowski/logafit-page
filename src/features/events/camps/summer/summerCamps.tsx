import { EventCard } from "../components/card/card";

export function SummerCamps() {
  return (
    <>
      <EventCard
        title="Wakacje w mieście - półkolonie pływackie"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => (
          <p>
            I- 30 czerwca – 4 lipca 2025 <br /> II- 7 – 11 lipca 2025
            <br /> III- 4 – 8 sierpnia 2025
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
        detailsUrl="https://assets.ctfassets.net/t01f4dq06ywt/6jb3jaKrQtlPg23mbwezcB/100e4381d79aca7413d49ef2ce6aef40/P%C3%B3%C5%82kolonie_lato_2025.pdf"
      />
      <EventCard
        title="Logafit Camp Sudety"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => <p>9-14 sierpnia 2025</p>}
        renderLocation={() => (
          <p>
            Willa Rudy Czarna Góra, <br /> Region Masyw Śnieżnika - Polska
          </p>
        )}
        renderAge={() => (
          <p>
            dzieci 9-12 lat <br /> oraz młodzież 13-18 lat
          </p>
        )}
        type="summer"
        detailsUrl="https://assets.ctfassets.net/t01f4dq06ywt/1ZvoZWCPbl7cNuEhyTRyuR/1499237bf148bf167cff453faf2fa686/CAMP_SUDETY_2025.pdf"
      />
      <EventCard
        title="Logafit Camp Mikoszewo"
        imageSrc="/assets/kids-having-fun.png"
        imageAlt="dzieci z napojami"
        renderDates={() => <p>17 – 25 lipca 2025</p>}
        renderLocation={() => <p>Ośrodek wypoczynkowy „Leśny Zakątek”</p>}
        renderAge={() => (
          <p>
            dzieci 7-11 lat <br /> oraz młodzież 12-18 lat
          </p>
        )}
        detailsUrl="https://assets.ctfassets.net/t01f4dq06ywt/1d8Q3toUwjvpxsWfgW3QfM/9be3e3ce5da76e53d3fdcd2c6d244559/CAMP_Mikoszewo_25.pdf"
        type="summer"
      />
    </>
  );
}

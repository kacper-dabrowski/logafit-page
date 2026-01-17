import { Metadata } from "next";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import {
  FileLink,
  FileLinksWrapper,
} from "../../../features/shared/fileLink/fileLink";
import { ServiceSchema } from "../../../features/seo/serviceSchema";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Aqua Fitness",
  description:
    "Aqua Fitness w Toruniu - bezpieczne i wszechstronne ćwiczenia w wodzie. Zajęcia dla dorosłych, w tym Aqua Mama dla kobiet w ciąży. Logafit.",
  openGraph: {
    title: "Aqua Fitness | Logafit Toruń",
    description:
      "Aqua Fitness - połączenie muzyki, ruchu i wody. Zajęcia dla dorosłych i kobiet w ciąży (Aqua Mama).",
    url: "https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness",
    images: [
      {
        url: "/assets/aqua-fitness-cover.png",
        width: 430,
        height: 320,
        alt: "Aqua Fitness zajęcia",
      },
    ],
  },
  alternates: {
    canonical: "https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness",
  },
};

const imageProps = {
  src: "/assets/aqua-fitness-cover.png",
  width: 430,
  height: 320,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <ServiceSchema
        serviceName="Aqua Fitness"
        serviceDescription="Aqua Fitness - bezpieczne i wszechstronne ćwiczenia w wodzie. Zajęcia dla dorosłych i kobiet w ciąży."
        serviceUrl="https://logafit.pl/dowiedz-sie-wiecej/aqua-fitness"
        image="https://logafit.pl/assets/aqua-fitness-cover.png"
        offers={[
          { name: "Jednorazowe wejście", price: "40" },
          { name: "Karnet miesięczny", price: "120", description: "4 wejścia" },
          {
            name: "Karnet miesięczny open",
            price: "30",
            description: "za wejście",
          },
        ]}
      />
      <h2 className={styles.heading}>Aqua Fitness</h2>
      <div>
        <TextWithImage imageProps={imageProps}>
          <Paragraph>
            Aqua fitness jest uważany za jedną z najbardziej bezpiecznych i
            wszechstronnych rodzajów ćwiczeń fizycznych.
          </Paragraph>
          <br />
          <Paragraph>
            To połączenie muzyki, ruchu i wody. Woda daje efekt minimalizacji
            grawitacji i tym samym możliwość zastosowania ćwiczeń w odciążeniu.
            Wszechstronny trening umożliwia zastosowanie ćwiczeń
            ogólnorozwojowych w wielu płaszczyznach. Specjalnie dobrana muzyka
            zapewnia utrzymanie odpowiedniej intensywności zajęć.
          </Paragraph>
          <br />
          <Paragraph>
            Specjalistyczny sprzęt sprawia, że udział w zajęciach mogą brać
            również osoby nie umiejące pływać oraz te, które ze względu na
            częste kontuzje nie mogą korzystać z lądowych form usprawniania.
          </Paragraph>
          <br />
          <Paragraph>
            Aqua Mama to forma aktywności fizycznej w wodzie, która jest
            szczególnie polecana kobietom w ciąży. Zajęcia odbywają się w
            basenie o bezpiecznej głębokości, w przyjemnej, ciepłej wodzie.
            Trening jest dostosowany do specyficznych potrzeb przyszłych mam i
            skupia się na wzmocnieniu mięśni, poprawie kondycji oraz redukcji
            obciążeń stawów i kręgosłupa, co jest kluczowe w czasie ciąży.
          </Paragraph>
          <br />
          <Paragraph>
            Ćwiczenia w wodzie zmniejszają uczucie ciężkości ciała dzięki
            wyporności, co sprawia, że trening jest bardziej komfortowy i
            bezpieczny dla kobiet na każdym etapie ciąży. Aqua fitness obejmuje
            ćwiczenia aerobowe, wzmacniające oraz rozciągające, które są
            delikatne, ale jednocześnie skuteczne. Program zwykle obejmuje
            łagodne ruchy nóg i ramion, ćwiczenia na stabilizację tułowia oraz
            techniki oddechowe, które mogą pomóc w przygotowaniu do porodu.
          </Paragraph>
          <br />
          <Paragraph>
            Zajęcia aqua fitness są przyjemnym i bezpiecznym sposobem na
            utrzymanie zdrowia i dobrej kondycji w czasie ciąży.
            <br />
            <span className={styles.bold}>
              Przyszłe mamy powinny jednak zawsze skonsultować się z lekarzem
              przed rozpoczęciem jakiejkolwiek aktywności fizycznej.
            </span>
          </Paragraph>
        </TextWithImage>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h2 className={styles.secondaryHeader}>Cennik</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Paragraph>Jednorazowe wejście: 50 zł</Paragraph>
                </li>
                <br />
                <li className={styles.listItem}>
                  <Paragraph>Karnet miesięczny na 4 wejścia: 140 zł</Paragraph>
                </li>
                <br />
                <li className={styles.listItem}>
                  <Paragraph>
                    Karnet miesięczny (open) - 35 zł za wejście
                  </Paragraph>
                </li>
                <FileLinksWrapper>
                  <FileLink fileName="regulamin_aqua_fitness.pdf">
                    Regulamin
                  </FileLink>
                  <FileLink fileName="grafik_aqua_fitness.docx">
                    Grafik
                  </FileLink>
                </FileLinksWrapper>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { FileLink } from "../../../features/shared/fileLink/fileLink";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

const imageProps = {
  src: "/assets/aqua-fitness-cover.png",
  width: 430,
  height: 320,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
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
        </TextWithImage>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h3 className={styles.secondaryHeader}>Cennik</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Paragraph>Jednorazowe wejście: 40 zł</Paragraph>
                </li>
                <br />
                <li className={styles.listItem}>
                  <Paragraph>Karnet miesięczny na 4 wejścia: 120 zł</Paragraph>
                </li>
                <br />
                <li className={styles.listItem}>
                  <Paragraph>
                    Karnet miesięczny (open) - 30 zł za wejście
                  </Paragraph>
                </li>
              </ul>
              <div className={styles.buttonsWrapper}>
                <FileLink fileName="GRAFIK-AQUA-FITNESS-23i24.docx">
                  Grafik
                </FileLink>
                <FileLink fileName="REGULAMIN-AQUA-FITNESS-.pdf">
                  Regulamin
                </FileLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

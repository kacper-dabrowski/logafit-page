import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

const imageProps = {
  src: "/assets/baby-swimming.png",
  width: 520,
  height: 430,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Pływanie korekcyjne</h2>
      <div>
        <TextWithImage
          imageProps={imageProps}
          containerClasses={styles.container}
        >
          <div>
            <Paragraph>
              Oferta kierowana jest do dzieci i młodzieży z wadami postawy
              posiadającymi podstawowe umiejętności pływackie.
            </Paragraph>
            <br />
            <Paragraph>
              Usprawnianie prowadzone jest w kontekście takich wad postawy jak
              plecy okrągłe, plecy wklęsłe, skoliozy, płaskostopie oraz
              dysfunkcje pokrewne.
            </Paragraph>
            <br />
            <Paragraph>
              Zajęcia mają charakter grupowy z uwzględnieniem indywidualizacji
              ćwiczeń. Koszt cyklu 10 spotkań wynosi 500 zł. Sesja trwa 45
              minut.
            </Paragraph>
          </div>
        </TextWithImage>
      </div>
    </div>
  );
}

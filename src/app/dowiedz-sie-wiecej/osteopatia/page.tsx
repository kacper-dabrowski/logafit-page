import { List } from "../../../features/infoPage/list";
import { TextWithImage } from "../../../features/infoPage/textWithImage";
import { Paragraph } from "../../../features/shared/typography/paragraph";
import styles from "./page.module.scss";

const imageProps = {
  src: "/assets/infants-swimming.png",
  width: 520,
  height: 430,
  alt: "pływające niemowlęta",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Osteopatia</h2>
      <div>
        <TextWithImage imageProps={imageProps}>
          <div>
            <Paragraph>
              Osteopatia opiera się na założeniu, że wiele problemów zdrowotnych
              wynika z zaburzeń w strukturze ciała. Poprzez odpowiednie techniki
              osteopaci starają się przywrócić naturalną równowagę ciała,
              poprawić krążenie krwi oraz limfy, a także złagodzić ból i
              napięcie w mięśniach i stawach
            </Paragraph>
            <div>
              <Paragraph>
                Osteopatia pediatryczna to specjalizacja w ramach osteopatii,
                która skupia się na pracy z noworodkami, niemowlętami, dziećmi i
                młodzieżą. Dzieci mogą korzystać z osteopatii w różnych
                sytuacjach, takich jak:
              </Paragraph>
              <br />
              <List
                items={[
                  {
                    title: "Problemy z karmieniem i kolki:",
                    content: `U noworodków osteopatia może pomóc w łagodzeniu problemów z karmieniem piersią, kolkami, refluksu żołądkowo-przełykowego i trudności z trawieniem.`,
                    lineBreak: true,
                  },
                  {
                    title: "Asymetrie ciała:",
                    content: `Osteopaci mogą pracować z niemowlętami, które mają asymetrie ciała, takie jak kręcz szyi (torticollis) czy asymetria czaszki (plagiocefalia).`,
                    lineBreak: true,
                  },
                  {
                    title: "Zaburzenia w rozwoju motorycznym:",
                    content:
                      "Osteopatia może wspierać dzieci, które mają trudności w rozwoju motorycznym, problemy z chodzeniem czy koordynacją ruchową.",
                    lineBreak: true,
                  },
                  {
                    title: "Wady postawy:",
                    content: `Starsze dzieci i młodzież mogą korzystać z osteopatii w przypadku wad postawy, takich jak skolioza, kifoza czy lordoza.`,
                    lineBreak: true,
                  },
                  {
                    title: "Problemy emocjonalne i behawioralne:",
                    content: `Niektórzy osteopaci pracują z dziećmi, które mają problemy emocjonalne, takie jak lęki czy nadpobudliwość, wierząc, że delikatne manipulacje mogą pomóc w redukcji stresu i napięcia.`,
                    lineBreak: true,
                  },
                ]}
              />
            </div>
          </div>
        </TextWithImage>
        <div>
          <div className={styles.topWrapper}>
            <div>
              <h3 className={styles.secondaryHeader}>Cennik</h3>
              <List
                items={[{ title: "Wizyta osteopatyczna:", content: "180zł" }]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

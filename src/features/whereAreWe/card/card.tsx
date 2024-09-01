import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./card.module.scss";

interface WhereAreWeCardProps {
  image: string | StaticImageData;
  name: string;
  variant: "lightBlue" | "red" | "yellow" | "green";
}

export function WhereAreWeCard({ image, name, variant }: WhereAreWeCardProps) {
  const containerClassNames = clsx(styles.container, styles[variant]);

  return (
    <div className={containerClassNames}>
      <div className={styles.imageWrapper}>
        <Image width={270} height={200} src={image} alt={name} />
      </div>
      <p className={styles.text}>{name}</p>
    </div>
  );
}

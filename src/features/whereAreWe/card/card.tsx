import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./card.module.scss";

interface WhereAreWeCardProps {
  image: string | StaticImageData;
  name: string;
  textColor: string;
  backgroundColor: string;
}

export function WhereAreWeCard({
  image,
  name,
  textColor,
  backgroundColor,
}: WhereAreWeCardProps) {
  const containerClassNames = clsx(styles.container);

  return (
    <div className={containerClassNames} style={{ backgroundColor }}>
      <div className={styles.imageWrapper}>
        <Image
          width={270}
          height={200}
          src={image}
          alt={name}
          className={styles.image}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 270px"
          quality={100}
        />
      </div>
      <p className={styles.text} style={{ color: textColor }}>
        {name}
      </p>
    </div>
  );
}

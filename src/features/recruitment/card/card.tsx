import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./card.module.scss";

interface RecruitmentCardProps {
  image: string | StaticImageData;
  name: string;
  variant: "lightBlue" | "red" | "yellow";
}

export function RecruitmentCard({
  image,
  name,
  variant,
}: RecruitmentCardProps) {
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

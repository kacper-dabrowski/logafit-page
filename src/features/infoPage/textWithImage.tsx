import Image from "next/image";
import clsx from "clsx";
import styles from "./textWithImage.module.scss";

interface TextWithImageProps {
  containerClasses?: string;
  children: React.ReactNode;
  imageProps: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export function TextWithImage({
  children,
  containerClasses,
  imageProps,
}: TextWithImageProps) {
  return (
    <div className={clsx(containerClasses, styles.container)}>
      <div>{children}</div>
      <Image className={styles.image} {...imageProps} />
    </div>
  );
}

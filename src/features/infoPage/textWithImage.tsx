import Image from "next/image";
import clsx from "clsx";
import styles from "./textWithImage.module.scss";

interface TextWithImageProps {
  containerCustomClasses?: string;
  children: React.ReactNode;
  imageProps: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  centered?: boolean;
}

export function TextWithImage({
  children,
  containerCustomClasses,
  imageProps,
  centered,
}: TextWithImageProps) {
  const containerClasses = clsx(containerCustomClasses, styles.container, {
    [styles.centered]: centered,
  });

  return (
    <div className={containerClasses}>
      <div>{children}</div>
      <Image className={styles.image} {...imageProps} />
    </div>
  );
}

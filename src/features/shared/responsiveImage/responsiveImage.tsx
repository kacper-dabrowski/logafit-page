import clsx from "clsx";
import Image from "next/image";
import styles from "./responsiveImage.module.scss";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: { mobile: number; desktop: number };
  height: { mobile: number; desktop: number };
  mobileClassNames?: string;
  desktopClassNames?: string;
}

export function ResponsiveImage({
  desktopClassNames,
  mobileClassNames,
  alt,
  src,
  width,
  height,
}: ResponsiveImageProps) {
  const mobileClasses = clsx(mobileClassNames, styles.mobileImage);
  const desktopClasses = clsx(desktopClassNames, styles.desktopImage);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width.mobile}
        height={height.mobile}
        className={mobileClasses}
      />
      <Image
        src={src}
        alt={alt}
        width={width.desktop}
        height={height.desktop}
        className={desktopClasses}
      />
    </>
  );
}

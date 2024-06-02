import clsx from "clsx";
import { ResponsiveImage } from "../../shared/responsiveImage/responsiveImage";
import styles from "./infoIcon.module.scss";

export enum LinkTarget {
  BlankPage,
  Current,
}

interface InfoIconProps {
  imgAlt: string;
  imgSrc: string;
  content: string;
  href: string;
  target?: LinkTarget;
}

export function InfoIcon({
  imgAlt,
  imgSrc,
  content,
  href,
  target = LinkTarget.Current,
}: InfoIconProps) {
  const iconClasses = clsx(styles.image);
  return (
    <a
      className={styles.link}
      href={href}
      target={target === LinkTarget.BlankPage ? "_blank" : undefined}
      rel="noreferrer"
    >
      <div className={styles.infoIcon}>
        <ResponsiveImage
          src={imgSrc}
          width={{ mobile: 12, desktop: 24 }}
          height={{ mobile: 12, desktop: 24 }}
          mobileClassNames={iconClasses}
          desktopClassNames={iconClasses}
          alt={imgAlt}
        />
        {content}
      </div>
    </a>
  );
}

import Image from "next/image";
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
  return (
    <div className={styles.infoIcon}>
      <Image src={imgSrc} width={12} height={12} alt={imgAlt} />
      <a
        href={href}
        target={target === LinkTarget.BlankPage ? "_blank" : undefined}
        rel="noreferrer"
      >
        {content}
      </a>
    </div>
  );
}

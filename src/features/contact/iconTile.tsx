import Image from "next/image";
import styles from "./iconTile.module.scss";

export enum LinkTarget {
  BlankPage,
  Current,
}

interface IconTileProps {
  imgAlt: string;
  imgSrc: string;
  content: string;
  href: string;
  target?: LinkTarget;
}

export function IconTile({
  imgAlt,
  imgSrc,
  content,
  href,
  target = LinkTarget.Current,
}: IconTileProps) {
  return (
    <div className={styles.tile}>
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

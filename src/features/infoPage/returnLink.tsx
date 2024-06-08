import Link from "next/link";
import clsx from "clsx";
import { ResponsiveImage } from "../shared/responsiveImage/responsiveImage";
import styles from "./returnLink.module.scss";

interface ReturnLinkProps {
  className?: string;
}

export function ReturnLink({ className }: ReturnLinkProps) {
  const arrowClasses = clsx(styles.arrow);

  return (
    <Link href="/" className={clsx(styles.container, className)}>
      <ResponsiveImage
        src="/assets/arrow-right.svg"
        alt="strzałka w prawo"
        width={{ mobile: 12, desktop: 24 }}
        height={{ mobile: 12, desktop: 24 }}
        mobileClassNames={arrowClasses}
        desktopClassNames={arrowClasses}
      />
      <p className={styles.text}>Powrót do strony głównej</p>
    </Link>
  );
}

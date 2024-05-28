import React from "react";
import clsx from "clsx";
import styles from "./headers.module.scss";

interface WithChildren {
  children: React.ReactNode;
}

export function SecondaryHeader({ children }: WithChildren) {
  return <h2 className={styles.secondary}>{children}</h2>;
}

interface GradientHeaderProps extends WithChildren {
  variant: "green" | "blue";
}

export function GradientHeader({ variant, children }: GradientHeaderProps) {
  return (
    <h3 className={clsx(styles.gradientHeading, styles[variant])}>
      {children}
    </h3>
  );
}

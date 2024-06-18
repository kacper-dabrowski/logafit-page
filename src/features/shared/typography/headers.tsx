import React from "react";
import clsx from "clsx";
import styles from "./headers.module.scss";

interface FocusableByLink {
  id?: string;
}

export function SecondaryHeader({
  children,
  id,
}: React.PropsWithChildren<FocusableByLink>) {
  return (
    <h2 id={id} className={styles.secondary}>
      {children}
    </h2>
  );
}

interface GradientHeaderProps {
  variant: "green" | "blue";
}

export function GradientHeader({
  variant,
  children,
}: React.PropsWithChildren<GradientHeaderProps>) {
  return (
    <h3 className={clsx(styles.gradientHeading, styles[variant])}>
      {children}
    </h3>
  );
}

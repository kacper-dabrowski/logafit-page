import React from "react";
import clsx from "clsx";
import styles from "./headers.module.scss";

interface FocusableByLink {
  id?: string;
  classNames?: string;
}

export function SecondaryHeader({
  children,
  id,
  classNames,
}: React.PropsWithChildren<FocusableByLink>) {
  const headerClasses = clsx(styles.secondary, classNames);

  return (
    <h2 id={id} className={headerClasses}>
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

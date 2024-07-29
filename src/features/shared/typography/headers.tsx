import React from "react";
import clsx from "clsx";
import styles from "./headers.module.scss";

interface FocusableByLink {
  id?: string;
  classNames?: string;
}

export function PrimaryHeader({
  children,
  id,
  classNames,
}: React.PropsWithChildren<FocusableByLink>) {
  const headerClasses = clsx(styles.secondary, classNames);

  return (
    <h1 id={id} className={headerClasses}>
      {children}
    </h1>
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
    <h2 className={clsx(styles.gradientHeading, styles[variant])}>
      {children}
    </h2>
  );
}

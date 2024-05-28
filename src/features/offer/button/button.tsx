import clsx from "clsx";
import React from "react";
import styles from "./button.module.scss";

interface ButtonProps extends React.PropsWithChildren {
  active?: boolean;
  variant: "green" | "blue" | "lime" | "skyBlue";
  onClick: React.MouseEventHandler;
}

export function OfferButton({
  children,
  active,
  variant,
  onClick,
}: ButtonProps) {
  const classes = clsx(styles.button, {
    [styles.active]: active,
    [styles[`${variant}Variant`]]: true,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

import clsx from "clsx";
import React from "react";
import styles from "./infoBox.module.scss";

interface InfoBoxProps {
  title: string;
  text: string;
  variant: "green" | "blue" | "lime" | "skyBlue" | "darkblue";
}

export function InfoBox({ title, text, variant }: InfoBoxProps) {
  const classes = clsx(styles.infoBox, styles[variant]);

  return (
    <div className={classes}>
      <div>
        <span className={styles.textBlack}>{title}</span>
        <span className={styles.textColor}>{text}</span>
      </div>
    </div>
  );
}

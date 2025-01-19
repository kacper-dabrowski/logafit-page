import clsx from "clsx";
import React from "react";
import styles from "./infoBox.module.scss";

interface InfoBoxProps {
  text: string;
  variant: "green" | "blue" | "lime" | "skyBlue";
  separator?: string;
}

export function InfoBox({ text, variant, separator }: InfoBoxProps) {
  const classes = clsx(styles.infoBox, styles[variant]);
  const dividedText = separator ? text.split(separator) : [text];

  return (
    <div className={classes}>
      <div className={styles.wrapperInfoBox}>
        {dividedText.map((content, index) => {
          return (
            <React.Fragment key={content}>
              <span className={styles.textColor}>{content}</span>
              {index < dividedText.length - 1 && (
                <span className={styles.textBlack}>{separator}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

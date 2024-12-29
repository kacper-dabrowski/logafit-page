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
  let keyMapIncrement = 0;
  let textA;
  if (separator) {
    textA = text.split(separator);
  } else {
    textA = [text];
  }
  return (
    <div className={classes}>
      <div>
        {textA.map((content, index) => {
          const keyA = keyMapIncrement;
          keyMapIncrement += 1;
          return (
            <React.Fragment key={keyA}>
              <span className={styles.textColor}>{content}</span>
              {index < textA.length - 1 && (
                <span className={styles.textBlack}>{separator}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

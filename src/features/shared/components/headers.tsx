import React from "react";
import styles from "./headers.module.scss";

interface WithChildren {
  children: React.ReactNode;
}

export function SecondaryHeader({ children }: WithChildren) {
  return <h2 className={styles.secondary}>{children}</h2>;
}

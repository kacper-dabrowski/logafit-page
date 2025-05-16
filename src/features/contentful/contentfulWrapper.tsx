import styles from "./contentfulWrapper.module.scss";

export function ContentfulWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}

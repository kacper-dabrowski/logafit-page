import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./downloadFileButton.module.scss";

export default function DownloadFileButton({ children }: PropsWithChildren) {
  return (
    <button type="button" className={styles.button}>
      <Link href="/#">{children}</Link>
    </button>
  );
}

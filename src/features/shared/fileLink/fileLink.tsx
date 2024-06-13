import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./fileLink.module.scss";

interface FileLinkProps {
  fileName: string;
}

export function FileLink({
  fileName,
  children,
}: PropsWithChildren<FileLinkProps>) {
  return (
    <Link href={`/static/${fileName}`}>
      <button className={styles.fileLink} type="button">
        {children}
      </button>
    </Link>
  );
}

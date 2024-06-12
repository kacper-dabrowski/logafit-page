import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./fileLink.module.scss";

interface FileLinkProps {
  fileHref: string;
}

export function FileLink({
  fileHref,
  children,
}: PropsWithChildren<FileLinkProps>) {
  return (
    <Link href={fileHref}>
      <button className={styles.fileLink} type="button">
        {children}
      </button>
    </Link>
  );
}

import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import styles from "./paragraph.module.scss";

interface ParagraphProps {
  className?: string;
}
export function Paragraph({
  children,
  className,
}: PropsWithChildren<ParagraphProps>) {
  return <p className={clsx(styles.text, className)}>{children}</p>;
}

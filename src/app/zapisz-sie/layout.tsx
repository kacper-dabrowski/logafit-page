import { PropsWithChildren } from "react";
import { ReturnLink } from "@/features/infoPage/returnLink";
import styles from "./layout.module.scss";

export default function LearnMoreLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <div className={styles.background} />
      <ReturnLink className={styles.returnLink} />
      <div>{children}</div>
    </section>
  );
}

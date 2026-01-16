import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { ReturnLink } from "@/features/infoPage/returnLink";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Zapisz się na zajęcia",
  description:
    "Zapisz się na szkolę pływania, aqua fitness lub osteopatię w Logafit Toruń. Wybierz aktywność i wypełnij formularz zgłoszeniowy.",
  openGraph: {
    title: "Zapisz się na zajęcia | Logafit Toruń",
    description:
      "Zapisz się na szkolę pływania, aqua fitness lub osteopatię w Logafit Toruń.",
    url: "https://logafit.pl/zapisz-sie",
  },
  alternates: {
    canonical: "https://logafit.pl/zapisz-sie",
  },
};

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <div className={styles.background} />
      <ReturnLink className={styles.returnLink} />
      <div>{children}</div>
    </section>
  );
}

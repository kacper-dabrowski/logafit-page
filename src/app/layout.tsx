import { clsx } from "clsx";
import { interFont } from "../fonts/inter";
import { Navbar } from "../layout/navbar/navbar";
import "./index.scss";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(interFont.className, styles.content);
  return (
    <html lang="en">
      <body className={classNames}>
        <Navbar additionalClasses={styles.navbar} />
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer} />
      </body>
    </html>
  );
}

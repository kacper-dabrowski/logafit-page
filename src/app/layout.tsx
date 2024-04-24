import { clsx } from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { interFont } from "../fonts/inter";
import { Navbar } from "../layout/navbar/navbar";
import "./index.scss";
import styles from "./layout.module.scss";
import { Footer } from "../layout/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(interFont.className);
  return (
    <html lang="en">
      <title>Logafit - Centrum Zdrowia i Fitnessu</title>
      <body className={classNames}>
        <Navbar additionalClasses={styles.navbar} />
        <main className={styles.content}>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

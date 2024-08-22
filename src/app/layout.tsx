import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { clsx } from "clsx";
import { SeoTags } from "../features/seo/seoTags";
import { interFont } from "../fonts/inter";
import { Footer } from "../layout/footer/footer";
import { Navbar } from "../layout/navbar/navbar";
import "./index.scss";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(interFont.className);

  return (
    <html lang="pl">
      <SeoTags />
      <body className={classNames}>
        <Navbar additionalClasses={styles.navbar} />
        <div className={styles.mainWrapper}>
          <main className={styles.content}>{children}</main>
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import { clsx } from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { interFont } from "../fonts/inter";
import { Navbar } from "../layout/navbar/navbar";
import "./index.scss";
import styles from "./layout.module.scss";
import { Footer } from "../layout/footer/footer";
import { SeoTags } from "../features/seo/seoTags";
import { Header } from "../layout/header/header";

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
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

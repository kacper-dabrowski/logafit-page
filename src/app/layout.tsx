import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { clsx } from "clsx";
import {
  AvailableEntity,
  contentfulClientService,
} from "../features/contentful/service/service";
import { LocalBusinessSchema } from "../features/seo/localBusinessSchema";
import { interFont } from "../fonts/inter";
import { Footer } from "../layout/footer/footer";
import { Navbar } from "../layout/navbar/navbar";
import "./index.scss";
import styles from "./layout.module.scss";
import { companyDataTransformer } from "../features/contentful/companyData/companyData.transformer";

const BASE_URL = "https://logafit.pl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Logafit Toruń - Centrum Zdrowia i Fitness | Szkoła i Nauka Pływania",
    template: "%s | Logafit Toruń",
  },
  description:
    "Centrum Logafit w Toruniu oferuje zajęcia w wodzie: pływanie dla niemowląt, dzieci i młodzieży. Profesjonalni instruktorzy. Zapraszamy!",
  keywords: [
    "szkoła pływania Toruń",
    "nauka pływania",
    "pływanie dla niemowląt",
    "pływanie dla dzieci",
    "aqua fitness Toruń",
    "rehabilitacja w wodzie",
    "osteopatia Toruń",
  ],
  authors: [{ name: "Logafit" }],
  creator: "Logafit",
  publisher: "Logafit",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "Logafit",
    title:
      "Logafit Centrum zdrowia i fitnessu - Szkoła pływania - Nauka pływania Toruń",
    description:
      "Centrum Logafit w Toruniu oferuje zajęcia w wodzie: pływanie dla niemowląt, dzieci i młodzieży. Profesjonalni instruktorzy. Zapraszamy!",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Logafit - Centrum Zdrowia i Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logafit Toruń - Centrum Zdrowia i Fitness",
    description:
      "Centrum Logafit w Toruniu oferuje zajęcia w wodzie: pływanie dla niemowląt, dzieci i młodzieży.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = clsx(interFont.className);
  const companyDataList = companyDataTransformer.transformMany(
    await contentfulClientService.getEntries(AvailableEntity.CompanyDetails),
  );

  return (
    <html lang="pl">
      {companyDataList[0] && (
        <LocalBusinessSchema companyData={companyDataList[0]} />
      )}
      <body className={classNames}>
        <Navbar additionalClasses={styles.navbar} />
        <div className={styles.mainWrapper}>
          <main className={styles.content}>{children}</main>
        </div>
        <Footer companyDataList={companyDataList} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

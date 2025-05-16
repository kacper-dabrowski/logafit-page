"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.scss";

interface NavbarProps {
  additionalClasses?: string;
}

export function Navbar({ additionalClasses }: NavbarProps) {
  const classes = clsx(styles.navbar, additionalClasses);
  const router = useRouter();

  const handleScroll = async (
    event: React.FormEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    router.push(`/#${id}`);
  };

  return (
    <nav className={classes}>
      <Link href="/" aria-label="strona główna">
        <Image
          className={styles.image}
          src="/assets/logo.png"
          alt="odnośnik do strony głównej"
          width={240}
          height={90}
          priority
        />
      </Link>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link
            href="/#oferta"
            aria-label="oferta"
            onClick={(event) => handleScroll(event, "oferta")}
          >
            Oferta
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#o-nas"
            aria-label="o nas"
            onClick={(event) => handleScroll(event, "o-nas")}
          >
            O nas
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#kontakt"
            aria-label="kontakt"
            onClick={(event) => handleScroll(event, "kontakt")}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

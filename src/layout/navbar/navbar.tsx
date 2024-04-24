import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "./navbar.module.scss";

interface NavbarProps {
  additionalClasses?: string;
}

export function Navbar({ additionalClasses }: NavbarProps) {
  const classes = clsx(styles.navbar, additionalClasses);

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
          <Link href="/#oferta" aria-label="oferta">
            Oferta
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#wydarzenia" aria-label="wydarzenia">
            Wydarzenia
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#o-nas" aria-label="o nas">
            O nas
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#kontakt" aria-label="kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

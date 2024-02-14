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
      <Link href="/">
        <Image
          className={styles.image}
          src="/assets/logo.png"
          alt=""
          width={240}
          height={90}
        />
      </Link>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href="/oferta">Oferta</Link>
        </li>
        <li className={styles.item}>
          <Link href="/wydarzenia">Wydarzenia</Link>
        </li>
        <li className={styles.item}>
          <Link href="/o-nas">O nas</Link>
        </li>
        <li className={styles.item}>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import styles from "./styles.module.css";
import { LogoIB } from "../components/LogoIB/LogoIB";

export const HeaderSection = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>{<LogoIB />}</Link>
      <div className={styles.bannerArea}>
        <h2>INVERSIONES BOARA</h2>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <li className={styles.lia}>
            <Link href={"/"}>Arreglos</Link>
          </li>
          <li className={styles.lia}>
            <Link href={"/resenas"}>Reseñas</Link>
          </li>
          <li className={styles.lia}>
            <Link href={"/about"}>Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

import styles from "./error.module.css";
import Link from "next/link";

export default function Error() {
  return (
    <section className={styles.body}>
      <h5>Error (400)</h5>
      <p>Nuestro sistema parece no estar disponible. Inténtalo más tarde.</p>
      <div>
        <a href={"/"}>
          <span>Volver a Intertarlo</span>
        </a>
        <Link href={"/about"}>
          <span>
            Saber mas sobre <span translate={"no"}>Inversiones Boara</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

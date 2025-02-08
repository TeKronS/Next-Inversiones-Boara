import { MenuDesplegable } from "@/components/MenuDesplegable/MenuDesplegable";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <main className={styles.main}>
      <MenuDesplegable />
      <section className={styles.cardContent} />
    </main>
  );
}

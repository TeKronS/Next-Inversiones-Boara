import { MenuDesplegable } from "@/components/MenuDesplegable/MenuDesplegable";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <section className={styles.body}>
      <MenuDesplegable />
      <section className={styles.cardContent} />
    </section>
  );
}

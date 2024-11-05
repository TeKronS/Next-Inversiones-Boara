import styles from "./menu.module.css";

export const MenuDesplegable = () => {
  return (
    <nav className={styles.body}>
      <div className={styles.boton} />
      <section className={styles.innerBody}>
        <div className={styles.optionsContainer}>
          <li>Cumpleaños</li>
          <li>San Valentin</li>
          <li>Dia de la Madre</li>
          <li>Dia del Padre</li>
          <li>Otros</li>
        </div>
      </section>
    </nav>
  );
};

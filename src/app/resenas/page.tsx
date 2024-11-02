import styles from "./styles.module.css";

export default function Resenas() {
  return (
    <section className={styles.body}>
      <h3>Reseñas</h3>
      <div className={styles.orderBar}>
        <span>Ordenar por:</span>
        <button id="resientes">
          Resientes
          <div>⬤</div>
        </button>
        <button id="antiguos">
          Antiguos
          <div>◯</div>
        </button>
      </div>
      <section className={styles.bodyArticles}></section>
    </section>
  );
}

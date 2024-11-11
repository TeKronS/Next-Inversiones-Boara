import styles from "./styles.module.css";
import { ReviewCard } from "@/components/Cards/ReviewCard/ReviewCard";

export default function Resenas() {
  return (
    <section className={styles.body}>
      <h2>Reseñas</h2>
      <div className={styles.reviewContent}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className={styles.bg}>
        <div className={`${styles.topleft} ${styles.particle}`}></div>
        <div className={`${styles.topright} ${styles.particle}`}></div>
        <div className={`${styles.bottomleft} ${styles.particle}`}></div>
        <div className={`${styles.bottomright} ${styles.particle}`}></div>
      </div>
    </section>
  );
}

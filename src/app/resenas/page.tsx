import styles from "./styles.module.css";
import { ReviewCard } from "@/components/Cards/ReviewCard/ReviewCard";
import { ReviewType } from "@/app/tipes";

export default async function Resenas() {
  const DOMINIO = process.env.NEXT_DOMINIO_API_URL;

  const res = await fetch(`${DOMINIO}/api/resenas`);
  const data = await res.json();

  return (
    <section className={styles.body}>
      <h2>Reseñas</h2>
      <div className={styles.reviewContent}>
        {data.map((cardData: ReviewType) => {
          return (
            <ReviewCard
              key={cardData._id}
              date={cardData.date}
              img={cardData.urlImage}
            />
          );
        })}
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

import styles from "./styles.module.css";
import { ReviewCard } from "@/components/Cards/ReviewCard/ReviewCard";
import { ReviewType } from "@/app/tipes";
import { getResenas } from "../methods/resenas/getResenas";
import { unstable_cache } from "next/cache";

const getRevalidateResenas = unstable_cache(
  async () => {
    return await getResenas();
  },
  ["resenas"],
  { revalidate: 1800, tags: ["resenas"] }
);

export default async function Resenas() {
  const resenas = await getRevalidateResenas();
  const resenasInvertido = resenas.reverse();

  return (
    <section className={styles.body}>
      <h2>Reseñas</h2>
      <div className={styles.reviewContent}>
        {resenasInvertido.map((cardData: ReviewType) => {
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

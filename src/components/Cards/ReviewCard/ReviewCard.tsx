import styles from "./reviewCard.module.css";
import Image from "next/image";
import { timeAgo } from "@/components/TimeAgo/TimeAgo";

export const ReviewCard = ({ img, date }: { img: string; date: string }) => {
  const { dateTime, timeago } = timeAgo(date);
  return (
    <article className={styles.body}>
      <time dateTime={dateTime}>{timeago}</time>
      <div className={styles.imagenContent}>
        <Image
          alt="Reseña de Venta Realizada"
          src={img}
          width={500}
          height={500}
        />
      </div>
    </article>
  );
};

import styles from "./reviewCard.module.css";
import Image from "next/image";
import img1 from "@/img/img1.jpg";

export const ReviewCard = () => {
  return (
    <article className={styles.body}>
      <time dateTime="06/11/2024">Hace un mes</time>
      <Image alt="" src={img1} />
    </article>
  );
};

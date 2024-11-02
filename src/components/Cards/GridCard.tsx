import Image from "next/image";
import styles from "./gridCard.module.css";
import img1 from "@/img/Card/1.jpg";
import whatsap from "@/img/WhatsappIcon.jpg";

export const Card = ({ title = "Titulo del arreglo", img = img1 }) => {
  return (
    <article className={styles.flipCard}>
      <div className={styles.flipCardFront}>
        <Image alt="" src={img} />
      </div>
      <div className={styles.flipCardBack}>
        <Image className={styles.imgBack} alt="" src={img} />
        <div className={styles.infoBack}>
          <h3 className={styles.title}>{title}</h3>
          <a
            className={styles.boton}
            target="blank"
            href="https://api.whatsapp.com/send?phone=584244476167&text=HOLAK"
          >
            Consultar Precio
            <Image alt="" width={40} height={40} src={whatsap} />
          </a>
        </div>
      </div>
    </article>
  );
};

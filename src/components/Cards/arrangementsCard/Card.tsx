import Image from "next/image";
import styles from "./Card.module.css";
import whatsap from "@/img/WhatsappIcon.jpg";

const PHONE = "584244476167";

export const Card = ({
  title = "Titulo del arreglo",
  img = "",
  imgLink = "Fail",
}) => {
  return (
    <article className={styles.flipCard}>
      <div className={styles.flipCardFront}>
        <Image alt="" src={img} width={320} height={427} />
      </div>
      <div className={styles.flipCardBack}>
        <Image
          className={styles.imgBack}
          width={320}
          height={427}
          alt={`Arreglo sobre ${title}`}
          src={img}
        />
        <div className={styles.infoBack}>
          <h3 className={styles.title}>{title}</h3>
          <a
            className={styles.boton}
            target="blank"
            href={`https://api.whatsapp.com/send?phone=${PHONE}&text= Hola me gustaria consultar el precio de este Arreglo ${imgLink}`}
          >
            Consultar Precio
            <Image alt="" width={40} height={40} src={whatsap} />
          </a>
        </div>
      </div>
    </article>
  );
};

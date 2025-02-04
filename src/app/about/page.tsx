import styles from "./about.module.css";
import img from "@/img/Inversiones Boara Fachada.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles.body}>
      <h2 className={styles.title}>SOBRE NOSOTROS</h2>
      <section>
        <h3>MISIÓN</h3>
        <p className={styles.paragraph}>
          Ofrecemos experiencias únicas y memorables a través de regalos
          personalizados para los momentos más especiales de la vida. Nos
          esforzamos por brindar alegría y conexión a través de cada detalle,
          creando recuerdos que duren para siempre.
        </p>
      </section>
      <section>
        <h3>VISIÓN</h3>
        <p className={styles.paragraph}>
          Ser la empresa líder en regalos personalizados, reconocida por nuestra
          creatividad, calidad y servicio excepcional. Queremos ser la primera
          opción para aquellos que buscan sorprender y emocionar a sus seres
          queridos en cada ocasión especial.
        </p>
      </section>
      <section className={styles.fachada}>
        <Image
          width={1279}
          height={1600}
          alt={"Fachada del Negocio"}
          src={img}
        />
      </section>
      <section>
        <address className={styles.contactUS}>
          <span className={styles.spanBold}>
            Contactanos a los siguientes números
          </span>
          <a
            href={"https://api.whatsapp.com/send?phone=584244476167&text=Hola"}
          >
            <span className={styles.name}>Jhonatan Bogado</span>
            <span>+58 424-4476167</span>
          </a>
          <a
            href={"https://api.whatsapp.com/send?phone=584144238416&text=Hola"}
          >
            <span className={styles.name}>Jose Bogado</span>
            <span>+58 414-4238416</span>
          </a>
          <span className={styles.spanBold}>
            Ubicados en San Carlos, Estado Cojedes.
          </span>
        </address>
      </section>
    </section>
  );
}

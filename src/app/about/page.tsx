import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <section className={styles.body}>
      <h2 className={styles.title}>Sobre Nosotros</h2>
      <section>
        <p className={styles.paragraph}>
          Ofrecemos arreglos personalizados para matrimonios, aniversarios,
          cumpleaños y más. Sorprende a tu ser querido con un detalle único.
          ¡Nosotros hacemos que sea posible!
        </p>
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

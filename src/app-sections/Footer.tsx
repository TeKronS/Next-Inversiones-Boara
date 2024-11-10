import whatsapp from "./../img/WhatsappIcon.jpg";
import facebook from "@/img/IconMsg.png";
import styles from "./styles.module.css";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.copyright}>
        <span>INVERSIONES BOARA</span>
        <span>Todos los derechos Reservados</span>
      </section>
      <section className={styles.contact}>
        <h4>Contáctanos</h4>
        <div className={styles.phoneContent}>
          <div>
            <Image alt="" src={whatsapp} />
            <a
              href={
                "https://api.whatsapp.com/send?phone=584244476167&text=Hola"
              }
            >
              +58 424-4476167
            </a>
          </div>
          <div>
            <Image alt="" src={whatsapp} />
            <a
              href={
                "https://api.whatsapp.com/send?phone=584144238416&text=Hola"
              }
            >
              +58 414-4238416
            </a>
          </div>
          <div>
            <Image alt="" src={facebook} />
            <a href={"https://m.me/105380652059822"}>Facebook</a>
          </div>
        </div>
      </section>
      <section className={styles.ubication}>
        <h4>Ubícanos</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d222.45987704077572!2d-68.5906729379308!3d9.66234923217245!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sve!4v1731250553755!5m2!1sen!2sve"
          width="90%"
          height="120"
          style={{ border: "0" }}
          loading="lazy"
          title={"Inversiones Boara"}
        ></iframe>
      </section>
    </footer>
  );
};

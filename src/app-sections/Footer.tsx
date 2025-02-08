import whatsapp from "./../img/WhatsappIcon.jpg";
import facebook from "@/img/IconMsg.png";
import instagram from "@/img/instagram.avif";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.copyright}>
        <span>INVERSIONES BOARA</span>
        <div className={styles.tekron}>
          <span>Creado por</span>
          <Link target="blank" href="https://github.com/TeKronS/">
            Simón Ramírez
          </Link>
        </div>
      </section>
      <section className={styles.contact}>
        <h4>Contáctanos</h4>
        <div className={styles.phoneContent}>
          <div>
            <Image alt="" src={instagram} />
            <a
              href={
                "https://www.instagram.com/inversionesboara?utm_source=qr&igsh=bmZteDh2aHJ0emk0"
              }
            >
              Instagram
            </a>
          </div>
          <div>
            <Image alt="" src={facebook} />
            <a href={"https://m.me/105380652059822"}>Facebook</a>
          </div>
          <div>
            <Image alt="Logo de Whatsap" src={whatsapp} />
            <a
              href={
                "https://api.whatsapp.com/send?phone=584244476167&text=Hola Inversones Boara"
              }
            >
              +58 424-4476167
            </a>
          </div>
          <div>
            <Image alt="" src={whatsapp} />
            <a
              href={
                "https://api.whatsapp.com/send?phone=584144238416&text=Hola Inversones Boara"
              }
            >
              +58 414-4238416
            </a>
          </div>
        </div>
      </section>
      <section className={styles.ubication}>
        <h4>Ubícanos</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.82395937795462!2d-68.58693693832504!3d9.665369924231092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7e1757e1371b27%3A0x58e86f6067543381!2sInversiones%20Boara!5e0!3m2!1ses!2sve!4v1738611455938!5m2!1ses!2sve"
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

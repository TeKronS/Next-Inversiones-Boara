import styles from "./page.module.css";
import { Card } from "@/components/Cards/GridCard";
import img1 from "@/img/Card/1.jpg";
import img2 from "@/img/Card/2.jpg";
import img3 from "@/img/Card/3.jpg";
import img4 from "@/img/Card/4.jpg";
import img5 from "@/img/Card/5.jpg";
import img6 from "@/img/Card/6.jpg";
import img7 from "@/img/Card/7.jpg";
import img8 from "@/img/Card/8.jpg";
import img9 from "@/img/Card/9.jpg";
import img10 from "@/img/Card/10.jpg";
import img11 from "@/img/Card/11.jpg";
import img12 from "@/img/Card/12.jpg";
import img13 from "@/img/Card/13.jpg";
import img14 from "@/img/Card/14.jpg";
import img15 from "@/img/Card/15.jpg";
import img16 from "@/img/Card/16.jpg";
import img17 from "@/img/Card/17.jpg";
import img18 from "@/img/Card/18.jpg";

export default function Home() {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}></h1>
      <section className={styles.cardContent}>
        <Card title="Titulo de arreglo 1" img={img1} />
        <Card title="Titulo de arreglo 1" img={img2} />
        <Card title="Titulo de arreglo 1" img={img3} />
        <Card title="Titulo de arreglo 1" img={img4} />
        <Card title="Titulo de arreglo 1" img={img5} />
        <Card title="Titulo de arreglo 1" img={img6} />
        <Card title="Titulo de arreglo 1" img={img7} />
        <Card title="Titulo de arreglo 1" img={img8} />
        <Card title="Titulo de arreglo 1" img={img9} />
        <Card title="Titulo de arreglo 1" img={img10} />
        <Card title="Titulo de arreglo 1" img={img11} />
        <Card title="Titulo de arreglo 1" img={img12} />
        <Card title="Titulo de arreglo 1" img={img13} />
        <Card title="Titulo de arreglo 1" img={img14} />
        <Card title="Titulo de arreglo 1" img={img15} />
        <Card title="Titulo de arreglo 1" img={img16} />
        <Card title="Titulo de arreglo 1" img={img17} />
        <Card title="Titulo de arreglo 1" img={img18} />
      </section>
    </section>
  );
}

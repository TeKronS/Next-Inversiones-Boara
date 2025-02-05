import styles from "./page.module.css";
import { Card } from "@/components/Cards/arrangementsCard/Card";
import { MenuDesplegable } from "@/components/MenuDesplegable/MenuDesplegable";
import { CardType } from "@/app/tipes";
import { getArreglos } from "./methods/arreglos/fetchArreglos";

export default async function Home() {
  const arreglos = await getArreglos();

  return (
    <main className={styles.main}>
      <MenuDesplegable />
      <section className={styles.cardContent}>
        {arreglos.map((cardData: CardType) => {
          return (
            <Card
              key={cardData._id}
              title={cardData.title}
              img={cardData.urlImage}
              imgLink={`${process.env.NEXT_DOMINIO_API_URL}/imagen/${cardData._id}`}
            />
          );
        })}
      </section>
    </main>
  );
}

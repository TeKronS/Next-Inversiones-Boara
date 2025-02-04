import styles from "./page.module.css";
import { Card } from "@/components/Cards/arrangementsCard/Card";
import { MenuDesplegable } from "@/components/MenuDesplegable/MenuDesplegable";
import { CardType } from "@/app/tipes";

export default async function Arreglos({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const DOMINIO = process.env.NEXT_DOMINIO_API_URL;
  const parametro = (await params).id;
  const res = await fetch(`${DOMINIO}/api/arreglos/${parametro}`);
  const data = await res.json();

  return (
    <main className={styles.main}>
      <MenuDesplegable />
      <section className={styles.cardContent}>
        {data.map((cardData: CardType) => {
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

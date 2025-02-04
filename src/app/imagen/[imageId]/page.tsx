import styles from "./styles.module.css";
import Image from "next/image";

export default async function Imagen({
  params,
}: {
  params: Promise<{ imageId: string }>;
}) {
  const parametro = (await params).imageId;
  const response = await fetch(
    `${process.env.NEXT_DOMINIO_API_URL}/api/image/${parametro}`,
    { method: "GET" }
  );
  const result = await response.json();
  const { urlImage } = result[0];
  return (
    <section className={styles.body}>
      <div>
        <Image alt="" width={675} height={864} src={urlImage} />
      </div>
    </section>
  );
}

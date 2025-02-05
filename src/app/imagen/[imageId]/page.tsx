import { getImageArreglo } from "@/app/methods/arreglos/fetchArreglos";
import styles from "./styles.module.css";
import Image from "next/image";

export default async function Imagen({
  params,
}: {
  params: Promise<{ imageId: string }>;
}) {
  const id = (await params).imageId;
  const arreglo = await getImageArreglo(id);
  const { urlImage } = arreglo[0];

  return (
    <section className={styles.body}>
      <div>
        <Image alt="" width={1279} height={1600} src={urlImage} />
      </div>
    </section>
  );
}

import Arreglos from "@/models/areglos";
import { dbConnect } from "@/libs/mongodb";

export async function getArreglos() {
  try {
    await dbConnect();
    const arreglos = await Arreglos.find();
    return arreglos;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function getArreglosCategory(category: string) {
  await dbConnect();
  const parametro = { category: category };
  const arreglos = await Arreglos.find(parametro);
  return arreglos;
}

export async function getImageArreglo(id: string) {
  console.log(id);
  await dbConnect();
  const response = await Arreglos.find({ _id: id });
  return response;
}

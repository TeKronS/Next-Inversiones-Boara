import Resenas from "@/models/resenas";
import { dbConnect } from "@/libs/mongodb";

export async function getResenas() {
  try {
    await dbConnect();
    const resenas = await Resenas.find();
    return resenas;
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

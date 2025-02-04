import Arreglos from "@/models/areglos";
import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/mongodb";

export async function GET() {
  try {
    await dbConnect();
    const arreglos = await Arreglos.find();
    return NextResponse.json(arreglos);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

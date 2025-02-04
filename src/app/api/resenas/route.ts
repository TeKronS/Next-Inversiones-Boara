import Resenas from "@/models/resenas";
import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/mongodb";

export async function GET() {
  try {
    await dbConnect();
    const resenas = await Resenas.find();
    return NextResponse.json(resenas);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

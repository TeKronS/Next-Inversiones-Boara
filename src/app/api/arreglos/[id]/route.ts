import Arreglos from "@/models/areglos";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/libs/mongodb";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  await dbConnect();
  const parametro = { category: (await params).id };
  const arreglos = await Arreglos.find(parametro);
  return NextResponse.json(arreglos);
}

import Arreglos from "@/models/areglos";
import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/libs/mongodb";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  await dbConnect();
  const { id } = await params;
  const response = await Arreglos.find({ _id: id });
  return NextResponse.json(response);
}

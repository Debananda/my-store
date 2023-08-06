import Product from "@/models/product.schema";
import { connectDB } from "@/utils/connect-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { name, price, description, images } = await req.json();
  await connectDB();
  const product = await Product.create({ name, price, description, images });
  return NextResponse.json(product, { status: 201 });
}

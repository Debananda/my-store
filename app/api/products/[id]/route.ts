import Product from "@/models/product.schema";
import { connectDB } from "@/utils/connect-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectDB();
  const product = await Product.findById(id);
  if (!product) {
    return NextResponse.json(
      { message: "Product not available" },
      { status: 404 }
    );
  }
  return NextResponse.json(product, { status: 200 });
}

export async function PATCH(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  const { name, price, description, images } = await req.json();
  await connectDB();
  const product = await Product.findByIdAndUpdate(id, {
    name,
    price,
    description,
    images,
  });
  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectDB();
  await Product.findByIdAndRemove(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

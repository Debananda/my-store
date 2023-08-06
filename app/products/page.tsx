import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";

const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE}/products`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Error in fetching response ");
    }
    const products = await response.json();
    return products.map((p: any) => ({
      name: p.name,
      description: p.description,
      price: p.price,
      images: p.images,
      id: p._id,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default async function products() {
  const products = await getProducts();
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/products");
  }
  return (
    <div>
      {products.map((p: any) => (
        <div
          key={p.id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          {p.images.length > 0 && (
            <figure>
              <Image src={p.images[0]} alt="Shoes" />
            </figure>
          )}
          <div className="card-body">
            <h2 className="card-title">{p.name}</h2>
            <p>{p.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

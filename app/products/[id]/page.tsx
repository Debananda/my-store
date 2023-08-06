import React from "react";

export async function generateStaticParams() {
  const products = await fetch(`${process.env.API_BASE}/products`).then((res) =>
    res.json()
  );

  return products.map((p: any) => ({
    id: p._id,
  }));
}

export async function generateMetadata({ params }: { params: any }) {
  const { id } = params;
  const product = await fetch(`${process.env.API_BASE}/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.name,
  };
}

const getProductDetails = async (id: string) => {
  const product = await fetch(`${process.env.API_BASE}/products/${id}`).then(
    (res) => res.json()
  );
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    images: product.images,
    id: product._id,
  };
};

export default function ProductDetails({ params }: { params: any }) {
  return <div>Details</div>;
}

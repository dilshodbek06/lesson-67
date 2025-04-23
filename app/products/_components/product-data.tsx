"use client";

import { Product } from "@/types";
import Image from "next/image";

interface ProductDataProps {
  products: Product[];
}

const ProductData = ({ products }: ProductDataProps) => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="card max-w-[300px]">
          <div className="card-header">
            <Image alt="rasm" src={product.imageUrl} width={140} height={200} />
          </div>
          <div className="card-body">
            <h3 className="font-bold">{product.name}</h3>
            <h3 className="text-blue-500">{product.price} UZS</h3>
            <h3 className="text-blue-500">{product.Categories.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductData;

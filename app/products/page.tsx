import { createClient } from "@/utils/supabase/server";
import ProductForm from "./_components/product-form";
import { Category, Product } from "@/types";
import ProductData from "./_components/product-data";

const ProductsPage = async () => {
  const supabase = await createClient();

  const { data: categories } = await supabase.from("Categories").select("*");
  const { data: products } = await supabase.from("Products").select(`
    id,
    name,
    price,
    imageUrl,
    created_at,
    Categories (
      id,
      title
    )
  `);

  return (
    <div className="container p-2">
      {/* ProductForm */}
      <ProductForm categories={categories as Category[]} />
      {/* ProductsData */}
      <ProductData products={products as unknown as Product[]} />
    </div>
  );
};

export default ProductsPage;

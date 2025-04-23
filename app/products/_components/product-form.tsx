"use client";

import { BASE_IMG_URL } from "@/helpers";
import useProductStore from "@/store/useProductStore";
import { Category } from "@/types";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoCloudUploadOutline } from "react-icons/io5";

interface ProductFormProps {
  categories: Category[];
}

const ProductForm = ({ categories }: ProductFormProps) => {
  const supabase = createClient();
  const {
    categoryId,
    imageUrl,
    loading,
    name,
    price,
    setCategoryId,
    setImageUrl,
    setLoading,
    setName,
    setPrice,
  } = useProductStore();

  const router = useRouter();

  const handleUpload = async (file: File) => {
    try {
      const { data } = await supabase.storage
        .from("products")
        .upload(`rasmlar_${Date.now()}`, file);
      setImageUrl(BASE_IMG_URL + `${data?.path}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveImage = async () => {
    try {
      await supabase.storage
        .from("products")
        .remove([imageUrl.slice(imageUrl.indexOf("products//") + 10)]);
      setImageUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {
      const obj = {
        name,
        price: parseInt(price),
        categoryId,
        imageUrl,
      };
      setLoading(true);
      await supabase.from("Products").insert([obj]).select();
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card max-w-[300px] mx-auto">
        <div className="card-header bg-dark text-white text-center">
          Add Product
        </div>
        <div className="card-body space-y-2">
          {/* image upload */}
          <div>
            {imageUrl ? (
              <div className="flex items-center gap-x-4">
                <Image src={imageUrl} alt="photo" width={100} height={100} />
                <button
                  onClick={handleRemoveImage}
                  className="btn btn-close text-red-500"
                ></button>
              </div>
            ) : (
              <label
                htmlFor="image"
                className="bg-white text-slate-500 font-semibold text-base rounded w-full h-20 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto"
              >
                <div className="mt-2">
                  <p className=" mb-0 text-center">Upload file</p>
                  <IoCloudUploadOutline className="size-7 mx-auto" />
                </div>

                <input
                  onChange={(e) => handleUpload(e.target.files![0])}
                  type="file"
                  id="image"
                  className="hidden"
                />
              </label>
            )}
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name..."
            className="form-control"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="price..."
            className="form-control mt-2"
          />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="form-control mt-2"
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="card-footer">
          <button
            disabled={loading}
            onClick={handleCreate}
            className="btn btn-dark w-full"
          >
            {loading ? "loading..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

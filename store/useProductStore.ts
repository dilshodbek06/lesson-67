import { create } from "zustand";

type Store = {
  imageUrl: string;
  name: string;
  price: string;
  categoryId: string;
  loading: boolean;
  setImageUrl: (imageUrl: string) => void;
  setName: (name: string) => void;
  setCategoryId: (categoryId: string) => void;
  setPrice: (price: string) => void;
  setLoading: (loading: boolean) => void;
};

const useProductStore = create<Store>()((set) => ({
  categoryId: "",
  imageUrl: "",
  loading: false,
  name: "",
  price: "",
  setCategoryId: (value) => set(() => ({ categoryId: value })),
  setImageUrl: (value) => set(() => ({ imageUrl: value })),
  setName: (value) => set(() => ({ name: value })),
  setLoading: (value) => set(() => ({ loading: value })),
  setPrice: (value) => set(() => ({ price: value })),
}));

export default useProductStore;

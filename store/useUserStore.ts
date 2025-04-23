import { create } from "zustand";

type Store = {
  fullName: string;
  age: string;
  isStudent: boolean;
  loading: boolean;
  editingId: number;
  setFullName: (fullName: string) => void;
  setAge: (age: string) => void;
  setIsStudent: (isStudent: boolean) => void;
  setLoading: (loading: boolean) => void;
  setEditingId: (id: number) => void;
};

const useUserStore = create<Store>()((set) => ({
  fullName: "",
  age: "",
  isStudent: false,
  loading: false,
  editingId: -1,
  setFullName: (value) => set(() => ({ fullName: value })),
  setAge: (value) => set(() => ({ age: value })),
  setIsStudent: (value) => set(() => ({ isStudent: value })),
  setLoading: (value) => set(() => ({ loading: value })),
  setEditingId: (value) => set(() => ({ editingId: value })),
}));

export default useUserStore;

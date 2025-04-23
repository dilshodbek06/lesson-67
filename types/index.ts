export type Category = {
  id: string;
  title: string;
  created_at: Date;
};
export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  Categories: {
    id: string;
    title: string;
  };
  created_at: Date;
};

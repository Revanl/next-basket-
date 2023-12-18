type Product = {
  id: number;
  category: string;
  images: string[]; // Assuming an array of image URLs
  brand: string;
  title: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  upcoming: boolean;
};

type ProductList = {
  products: Product[];
  productsPerPage?: number; // Number of products to display per row
};

type SetSelectedProductProps = {
  setSelectedProduct: (product: Product) => void;
} & Product;
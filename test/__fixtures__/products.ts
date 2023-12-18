
// Dummy data for a single product
const ProductFixture: Product = {
  id: 1,
  category: 'Electronics',
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  brand: 'Dummy Brand',
  title: 'Dummy Product',
  price: 99.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 50,
  upcoming: false,
};

// Dummy data for a list of products
const ProductListFixture: ProductList = {
  products: [
    {
      id: 1,
      category: 'Electronics',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
      brand: 'BrandA',
      title: 'ProductA',
      price: 199.99,
      discountPercentage: 15,
      rating: 4.7,
      stock: 30,
      upcoming: false,
    },
    {
      id: 2,
      category: 'Clothing',
      images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
      brand: 'BrandB',
      title: 'ProductB',
      price: 49.99,
      rating: 4.2,
      stock: 20,
      upcoming: true,
    },
    // Add more products as needed
  ],
  productsPerPage: 3,
};

export { ProductFixture, ProductListFixture };
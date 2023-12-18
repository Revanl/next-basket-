'use client'

import { useState } from 'react';
import AddToBasketButton from './ProductAddToBasket';
import ProductDetails from './ProductDetails';
import ProductImageContainer from './ProductImageContainer';
import ProductRating from './ProductRating';
import ProductCategory from './ProductCategory';
import ProductDialog from './ProductDialog';
import Link from 'next/link';

const ProductList: React.FC<ProductList> = ({ products, productsPerPage = 4 }) => {
  {/* useState for showing a dialog with the selected product */}
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
    {/* Render modal based on selectedProduct */}
    {selectedProduct && <ProductDialog {...selectedProduct} setSelectedProduct={() => setSelectedProduct(null)} />}
    {/* Render a responsive grid with products */}
    <div className={`md:max-w-[600px] lg:max-w-[900px] mx-auto bg-stone-50 py-10 ${selectedProduct && 'hidden'}`}>
      <div className="flex justify-center grid gap-x-8 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={`product-${product.id}`} className="mx-auto text-center">
            <ProductCategory {...product} />
            <div className="bg-white rounded shadow text-left px-4 pt-4 pb-1 m-auto">
              <Link href={`/product/${product.id}`}>
                <ProductImageContainer {...product} />
                <ProductDetails {...product} />
                <ProductRating {...product} />
              </Link>
              <AddToBasketButton {...product} setSelectedProduct={() => setSelectedProduct(product)} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;

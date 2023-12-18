import React from 'react';
import AddToBasketButton from './ProductAddToBasket';
import ProductDetails from './ProductDetails';
import ProductImageContainer from './ProductImageContainer';
import ProductRating from './ProductRating';
import ProductCategory from './ProductCategory';
import Link from 'next/link';

/**
 * Renders the product
 * will return the product image's container, the product details and product rating component
 * at the bottom it will also return the add to basket button which can open a modal with the selected product
 */
const ProductCard: React.FC<SetSelectedProductProps> = ({ setSelectedProduct, ...product }) => {
  return (
    <div className="mx-auto text-center">
      <ProductCategory {...product} />
      <div className="bg-white rounded shadow text-left px-4 pt-4 pb-1 m-auto">
          <Link href={`/product/${product.id}`}>
            <ProductImageContainer {...product} />
            <ProductDetails {...product} />
            <ProductRating {...product} />
          </Link>
          <AddToBasketButton  {...product} setSelectedProduct={() => setSelectedProduct(product)}/>
      </div>
    </div>
  );
};

export default ProductCard;
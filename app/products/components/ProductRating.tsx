// components/ProductStatus.tsx
import React from 'react';
import ProductStars from './ProductStars';

/**
 * Returns the product status which is on the bottom left of the product image
    Can be out of stock, upcomming(not yet available) or discounted.
 */
 const ProductRating: React.FC<Product> = ({ ...product  }) => {
  return (
    <div className="w-[88px] h-4 relative flex items-center">
      <div className="w-[88px] h-4 relative flex">
        <ProductStars {...product } />
      </div>
      <span className="product-rating text-zinc-600 text-xs font-medium leading-none ml-2 mt-1">{product.rating}</span>
    </div>
  );
};

export default ProductRating;
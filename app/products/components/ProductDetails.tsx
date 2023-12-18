import React from 'react';
import ProductPrice from './ProductPrice';
import ProductBrandTitle from './ProductBrandTitle';

/**
 * Renders some product details such as brand, title and product price
 */
const ProductDetails: React.FC<Product> = (product) => {
  return (
    <div className="relative">
      <ProductBrandTitle {...product} />
      <ProductPrice {...product} />
    </div>
  );
};

export default ProductDetails;
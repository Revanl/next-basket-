import React from 'react';

/**
 * Renders the product category which is used above the product image
 */
const ProductCategory: React.FC<Product> = ({category, stock}) => {
  return (
    <b className="text-black text-sm font-medium">
      {category}{!stock && " - out of stock"}
    </b>
  );
};

export default ProductCategory;
import React from 'react';

/**
 * Renders the product brand and title
 */
const ProductBrandTitle: React.FC<Product> = ({brand, title}) => {
  return (
    <>
      <b className="text-zinc-600 text-xs font-medium">{brand}</b>
      <p className="text-zinc-900 text-sm font-medium">{title}</p>
    </>
  );
};

export default ProductBrandTitle;
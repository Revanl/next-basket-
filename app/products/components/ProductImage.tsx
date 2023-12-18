import React from 'react';
import Image from 'next/image';

/**
 * Renders the product image
 */
const ProductImage: React.FC<Product> = ({ images, title, stock }) => {
  return (
    <Image
      src={images[0]}
      alt={title}
      width={268}
      height={268}
      className={`object-fill w-[268px] h-[268px] product-image ${!stock && 'opacity-70'}`}
    />
  );
};

export default ProductImage;
import React from 'react';
import ProductImage from './ProductImage';
import ProductStatus from './ProductStatus';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders product image alongside everything that is visible on the image.
 *  In other words Product status and icons
 */
const ProductImageContainer: React.FC<Product> = (product) => {
  const fontAwesomeStyle = "p-[10px] w-[15px] bg-white rounded-full shadow backdrop-blur-[20px] hover:bg-opacity-60"
  return (
    <div className="relative">
      <ProductImage {...product } />
      <ProductStatus {...product } />
      <FontAwesomeIcon className={`absolute bottom-[50px] right-3 ${fontAwesomeStyle}`} icon={faCode}
        onClick={(e)=>e.preventDefault()}/>
      <FontAwesomeIcon className={`absolute bottom-[10px] right-3 ${fontAwesomeStyle}`} icon={faHeart}
        onClick={(e)=>e.preventDefault()}/>
    </div>
  );
};

export default ProductImageContainer;
import React from 'react';
import ProductImageContainer from './ProductImageContainer';
import ProductPrice from './ProductPrice';
import ProductBrandTitle from './ProductBrandTitle';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

/**
 * Renders a product dialog
 * Is shown after "add to basked" is clicked.
 */
const ProductDialog: React.FC<SetSelectedProductProps> = ({ setSelectedProduct, ...product }) => {
  const handleRemoveProduct = () => {
    setSelectedProduct(product);
  };

  return (
    <div className='h-screen w-screen bg-black bg-opacity-60 relative'>
      <div className="w-[502px] p-4 bg-white rounded shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-zinc-900 text-lg font-medium mb-5">
            Successfully added to basket
            <span className="w-8 h-8 cursor-pointer float-right" onClick={handleRemoveProduct} >
              <FontAwesomeIcon icon={faX} />
            </span>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <Image src={product.images[0]} alt={product.title} width={268} height={268}
              className={`w-[84px] h-[84px] product-image`} />
            <div className="">
              <p className="text-zinc-900 text-sm font-medium">{product.title}</p>
              <ProductPrice {...product} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;


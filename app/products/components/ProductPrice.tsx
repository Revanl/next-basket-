import React from 'react';
/**
 * Renders the product price
 *  Checks if there is a discount and calculates the new price
 */
const ProductPrice: React.FC<Product> = ({ discountPercentage, price }) => {
  return (
    <div className="w-[154px] h-6 justify-start items-center gap-2 inline-flex mt-8">
      <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className={`${discountPercentage ? 'text-sm font-normal text-zinc-600 line-through' : 'font-medium text-zinc-900'}`}>
            €{price.toFixed(2)}
          </div>
      </div>
      {discountPercentage && (
        <div className="discount-price text-zinc-900 text-base font-medium leading-normal">
          €{(price * (1 - discountPercentage / 100)).toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
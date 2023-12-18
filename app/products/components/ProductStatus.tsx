import React from 'react';

/**
 * Returns the product status which is on the bottom left of the product image
    Can be out of stock, upcomming(not yet available) or discounted.
 */
 const ProductStatus: React.FC<Product> = ({ stock, upcoming, discountPercentage }) => {
return (
    <>
      {!stock && (
        <div className="absolute m-auto inset-0 w-[102px] h-7 px-2 py-1 bg-zinc-900">
          <div className="text-white text-sm font-bold leading-tight">Out of stock</div>
        </div>
      )}
      <div className="absolute bottom-5 left-5 h-5 px-[11px] py-0.5 bg-white border border-white text-xs font-bold leading-none">
        {upcoming ? (
          <span className='text-black align-middle'>NEW</span>
        ) : (
          discountPercentage && (
            <span className="text-red-700 align-middle">-{discountPercentage}%</span>
          )
        )}
      </div>
    </>
  );
};

export default ProductStatus;
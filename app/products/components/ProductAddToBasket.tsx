import React from 'react';
/**
 * Renders the add to basket button. Also supports the functionality for opening a modal with the selected product
 */
const AddToBasketButton: React.FC<SetSelectedProductProps> = ({ setSelectedProduct, ...product }) => {
  const { upcoming, stock } = product;

  if (upcoming) return null;
  
  const handleAddToBasketClick = () => {
    // Your logic for adding the product to the basket
    // You can call the onAddToBasket callback here
    if (product.stock) {
      setSelectedProduct(product);
    }
  };
  return (
    <>
      <div className="border border-zinc-600 mt-4 mb-1"></div>
      <div className="px-4 py-2 rounded-[100px] items-start gap-2 cursor-pointer text-center">
        <button onClick={handleAddToBasketClick}
          className={`text-zinc-900 text-xs font-medium uppercase leading-none hover:text-opacity-70 ${
            !stock && 'text-opacity-70'
          }`}>
          Add to basket
        </button>
      </div>
    </>
  );
};

export default AddToBasketButton;

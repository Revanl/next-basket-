import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPrice from './ProductPrice';
import '@testing-library/jest-dom'
import { ProductFixture } from '@/test/__fixtures__/products';

describe('ProductPrice', () => {
  it('renders the original price', () => {
    render(<ProductPrice {...ProductFixture} />);

    const originalPriceElement = screen.getByText('€99.99');

    expect(originalPriceElement).toBeInTheDocument();
  });

  it('renders both original and discounted prices when there is a discount', () => {
    render(<ProductPrice {...ProductFixture} />);

    const originalPriceElement = screen.getByText('€99.99');
    expect(originalPriceElement).toBeInTheDocument();
    if (ProductFixture.discountPercentage) {
      const discountedPriceElement = screen.getByText(`€${(ProductFixture.price * (1 - ProductFixture.discountPercentage / 100)).toFixed(2)}`);
      expect(discountedPriceElement).toBeInTheDocument();
    }
  });

  it('renders the original price with strikethrough when there is a discount', () => {
    render(<ProductPrice {...ProductFixture} />);

    const originalPriceElement = screen.getByText('€99.99');

    expect(originalPriceElement).toHaveClass('line-through');
  });
});

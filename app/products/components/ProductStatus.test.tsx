import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ProductFixture } from '@/test/__fixtures__/products';
import ProductStatus from './ProductStatus';

describe('ProductStatus', () => {
  it('renders "Out of stock" message when stock is 0', () => {
    const modifiedProductFixture = {...ProductFixture};
    modifiedProductFixture.stock = 0;
    render(<ProductStatus {...modifiedProductFixture} />);

    const outOfStockMessage = screen.getByText('Out of stock');
    expect(outOfStockMessage).toBeInTheDocument();
  });

  it('renders "new" message when product status upcomming', () => {
    const modifiedProductFixture = {...ProductFixture};
    modifiedProductFixture.upcoming = true;
    render(<ProductStatus {...modifiedProductFixture} />);

    const outOfStockMessage = screen.getByText('NEW');
    expect(outOfStockMessage).toBeInTheDocument();
  });

  it('renders a discount message when there is a discount percentages and product is not upcomming', () => {
    const modifiedProductFixture = {...ProductFixture};
    render(<ProductStatus {...modifiedProductFixture} />);

    const outOfStockMessage = screen.getByText('-10%');
    expect(outOfStockMessage).toBeInTheDocument();
  });
})
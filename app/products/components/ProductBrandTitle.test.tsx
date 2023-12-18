import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductBrandTitle from './ProductBrandTitle';
import '@testing-library/jest-dom'
import { ProductFixture } from '@/test/__fixtures__/products';

describe('ProductBrandTitle', () => {
  it('renders product brand and title', () => {
    render(<ProductBrandTitle {...ProductFixture} />);

    const brandElement = screen.getByText(ProductFixture.brand);
    const titleElement = screen.getByText(ProductFixture.title);

    // Assert that brand and title are found in the rendered output
    expect(brandElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it('renders product brand and title with the correct styles', () => {
    render(<ProductBrandTitle {...ProductFixture} />);

    const brandElement = screen.getByText(ProductFixture.brand);
    const titleElement = screen.getByText(ProductFixture.title);

    // Assert that brand and title have the correct styles
    expect(brandElement).toHaveClass('text-zinc-600', 'text-xs', 'font-medium');
    expect(titleElement).toHaveClass('text-zinc-900', 'text-sm', 'font-medium');
  });
});

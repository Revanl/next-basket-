import { render, screen } from '@testing-library/react';
import { ProductFixture } from '@/test/__fixtures__/products';
import ProductRating from './ProductRating';

describe('ProductRating', () => {

  it('renders the correct rating text', () => {
    const {container} = render(<ProductRating {...ProductFixture} />);
    const ratingText = document.getElementsByClassName('product-rating')[0].textContent;
    expect(ratingText).toBe(ProductFixture.rating.toString());
  });
});

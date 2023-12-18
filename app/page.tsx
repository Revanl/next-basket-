import ProductList from './products/components/ProductList'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
  subsets: ['latin'],
})
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default async function Home() {
  const response = await fetch(`https://dummyjson.com/products/category/womens-jewellery`);
  const data = await response.json();
  data.products[2].discountPercentage = null;
  data.products[1].stock = null;
  data.products[0].upcoming = true;
  console.log(data.products[2].discountPercentage);
  return (
    <main className={rubik.className}>
      <ProductList products={data.products} />
    </main>
  )
}

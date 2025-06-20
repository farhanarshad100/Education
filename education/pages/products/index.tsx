// pages/products/index.tsx

import { GetStaticProps } from 'next';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type ProductsPageProps = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return { props: { products } };
};

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <a href={`/products/${p.id}`}>{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

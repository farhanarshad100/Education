import Image from "next/image";

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={600} height={400} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

// 2. Generate paths for all products at build time
export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

// 3. Fetch product data for each product page
export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

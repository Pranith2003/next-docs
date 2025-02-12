import Link from "next/link";

export default function Products() {
  const productId: number[] = [8, 9, 10];
  return (
    <>
      <Link href="/">Home</Link>

      <h2>
        <Link href="/products/11">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/12">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/13">Product 3</Link>
      </h2>
      <h2>
        <Link href="/products/14">Product 4</Link>
      </h2>
      <hr />

      {productId.map((id) => (
        <h3 key={id}>
          <Link href={`/products/${id}`}>Product {id}</Link>
        </h3>
      ))}
    </>
  );
}

export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Reviews of Product: {productId}</h1>

      <ul>
        <li>r1</li>
        <li>r2</li>
        <li>r3</li>
        <li>r4</li>
        <li>r5</li>
        <li>r6</li>
        <li>r7</li>
        <li>r8</li>
        <li>r9</li>
      </ul>
    </>
  );
}

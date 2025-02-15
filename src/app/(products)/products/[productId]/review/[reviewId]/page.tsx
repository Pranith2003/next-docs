import { redirect } from "next/navigation";
import Link from "next/link";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewByProduct({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Intentional Error");
  }
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/");
  }
  return (
    <>
      <h1>
        Review id {reviewId} of the Product {productId}
      </h1>

      <div className="underline">
        <Link href={`/products/${productId}/review`}>
          Click here for More Reviews
        </Link>
      </div>
    </>
  );
}

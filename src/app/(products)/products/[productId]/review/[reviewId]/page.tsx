import { notFound } from "next/navigation";

export default async function ReviewByProduct({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review id {reviewId} of the Product {productId}
      </h1>
    </>
  );
}

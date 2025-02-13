import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  //fun name should be same
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 0);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function DetailsOfProduct({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div className="flex gap-12">
      <h1>Details of the ProductId: {productId}</h1>
      <Link
        href={`/products/${productId}/review/${productId}`}
        className="underline"
      >
        Review
      </Link>
    </div>
  );
}

import { Metadata } from "next";

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
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function DetailsOfProduct({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details of the Product {productId}</h1>;
}

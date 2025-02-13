import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Blog() {
  await new Promise((reslove) => {
    setTimeout(() => {
      reslove("Intentional Delay");
    }, 2000);
  });
  return (
    <>
      <h1>Blog</h1>
    </>
  );
}

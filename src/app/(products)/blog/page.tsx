import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blog() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Blog</h1>
    </>
  );
}

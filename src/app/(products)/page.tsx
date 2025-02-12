import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/products">Products</Link> {" "}
      <Link href="/blog">Blogs</Link>{" "}
      <Link href="/register">Get Started</Link>{" "}
      <Link href="/counter">Counter</Link>
      <h1>Welcome to home page</h1>
    </>
  );
}

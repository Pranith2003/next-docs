"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  // console.log(pathname);
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <>
      <h2>{productId} Review Not Found</h2>
      <p>Could not find selected Review id: {reviewId} </p>
    </>
  );
}

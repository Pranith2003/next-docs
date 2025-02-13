"use client";
import { useRouter } from "next/navigation";

export default async function orderProducts() {
  const router = useRouter();
  await new Promise((reslove) => {
    setTimeout(() => {
      reslove("Intentional Delay");
    }, 2000);
  });
  const handleClick = () => {
    alert("Your order has been placed");
    router.push("/");
  };
  return (
    <>
      <h1>This is Orders Page</h1>
      <button className="px-6 py-2 border-2 border-black" onClick={handleClick}>
        CheckOut
      </button>
    </>
  );
}

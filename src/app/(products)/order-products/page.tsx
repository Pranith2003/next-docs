"use client";
import { useRouter } from "next/navigation";

const delay = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay");
    }, 2000);
  });
};

export default function OrderProducts() {
  const router = useRouter();
  const handleClick = async () => {
    alert("Your order has been placed");
    delay();
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

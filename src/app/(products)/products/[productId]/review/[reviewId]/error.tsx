"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      //for server side recovery
      router.refresh();
      reset();
    });
  };
  return (
    <div className="border-2 border-black p-10">
      <p className="text-red-500 ">{error.message}</p>
      <button
        className="bg-slate-500 border-1 rounded-lg w-fit h-auto px-4 py-2"
        onClick={reload}
      >
        Try Again
      </button>
    </div>
  );
}

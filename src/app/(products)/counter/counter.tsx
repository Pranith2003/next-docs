"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>The count value: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

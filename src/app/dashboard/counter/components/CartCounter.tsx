"use client";

import { useState } from "react";

export function CartCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-9xl"> {count} </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-black text-lg px-4 py-3 rounded-md text-white hover:bg-black/80 shadow-md"
        >
          +1
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-black text-lg px-4 py-3 rounded-md text-white hover:bg-black/80 shadow-md"
        >
          -1
        </button>
      </div>
    </>
  );
}

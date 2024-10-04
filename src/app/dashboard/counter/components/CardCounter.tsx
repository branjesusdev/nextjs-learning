"use client";

import { useAppSelector, useAppDispatch } from "@/store";
import { decrement, increment } from "@/store/counter/CounterSlice";

export function CardCounter() {
  const count = useAppSelector((state) => state.counterReducer.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="text-9xl"> {count} </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch( increment() )}
          className="bg-black text-lg px-4 py-3 rounded-md text-white hover:bg-black/80 shadow-md"
        >
          +1
        </button>

        <button
          onClick={() => dispatch( decrement() )}
          className="bg-black text-lg px-4 py-3 rounded-md text-white hover:bg-black/80 shadow-md"
        >
          -1
        </button>
      </div>
    </>
  );
}

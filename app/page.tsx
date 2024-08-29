"use client";

import { useCounterStore } from "@/utils/counter-store";

export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <main className="min-h-screen w-full h-full flex flex-col items-center justify-center gap-10">
      <div className="text-5xl">Counter: <span className="font-bold">{count}</span></div>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-blue-500 text-white font-bold px-4 py-3 rounded-md" onClick={increment}>Increment</button>
        <button className="bg-red-500 text-white font-bold px-4 py-3 rounded-md" onClick={decrement}>Decrement</button>
      </div>
    </main>
  );
}

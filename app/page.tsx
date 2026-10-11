"use client";

import { counterStore } from "./couterStore";

export default function Home() {
  const { count, increament, decreament, increamentBy5 } = counterStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-100 via-white to-purple-100 p-5">
      <main className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800">Counter App</h1>

        <p className="mt-2 text-gray-500">Zustand State Management</p>

        {/* Counter Display */}
        <div className="my-8 flex h-36 items-center justify-center rounded-2xl bg-blue-50">
          <span className="text-6xl font-extrabold text-blue-600">{count}</span>
        </div>

        {/* Increment & Decrement */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={increament}
            className="rounded-xl bg-green-500 px-5 py-4 text-lg font-bold text-white shadow-md transition hover:bg-green-600 active:scale-95"
          >
            + Increment
          </button>

          <button
            type="button"
            onClick={decreament}
            className="rounded-xl bg-red-500 px-5 py-4 text-lg font-bold text-white shadow-md transition hover:bg-red-600 active:scale-95"
          >
            − Decrement
          </button>
        </div>

        {/* Increase by 5 */}
        <button
          type="button"
          onClick={() => increamentBy5(15)}
          className="mt-4 w-full rounded-xl bg-blue-600 px-5 py-4 text-lg font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
        >
          Increase by 5
        </button>

        <p className="mt-6 text-sm text-gray-400">
          Manage your counter with Zustand
        </p>
      </main>
    </div>
  );
}

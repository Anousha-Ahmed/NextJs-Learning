"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutLayout({ children }) {
  const [layoutCount, setLayoutCount] = useState(0);

  useEffect(() => {
    console.log("📦 Layout Mount Hua (Sirf aik baar chalega)!");
  }, []);

  return (
    <div className="border-2 border-solid border-green-500 p-6 max-w-xl mx-auto mt-10">
      <h2 className="text-green-700 font-bold text-lg mb-2">Layout Scope</h2>
      {/* Navigation Links to switch routes */}
      <nav className="flex gap-4 mb-4 bg-gray-100 p-2 rounded">
        <Link href="/about" className="text-blue-500 underline">
          About Home
        </Link>
        <Link href="/about/test1" className="text-blue-500 underline">
          Test 1
        </Link>
        <Link href="/about/test2" className="text-blue-500 underline">
          Test 2
        </Link>
      </nav>

      <div className="mb-4 bg-green-50 p-2 rounded">
        <p className="text-blue-700">
          Layout Counter State:{" "}
          <strong className="text-xl text-cyan-800">{layoutCount}</strong>
        </p>
        <button
          onClick={() => setLayoutCount(layoutCount + 1)}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm mt-1"
        >
          Increment Layout Counter
        </button>
      </div>

      {/* Template aur pages yahan render honge */}
      {children}
    </div>
  );
}

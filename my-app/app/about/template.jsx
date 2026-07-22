// app/about/template.jsx
"use client";

import { useState, useEffect } from "react";

export default function AboutTemplate({ children }) {
  const [count, setCount] = useState(0);

  // Yeh log har dafa chalega jab template naye siray se mount hoga
  useEffect(() => {
    console.log("🔄 Template Mount Hua (Naya Instance Bana)!");
  }, []);

  return (
    <div className="border-2 border-dashed border-blue-500 p-4 m-2">
      <div className="mb-4 bg-blue-50 p-2 rounded">
        <h3 className="text-blue-700 font-bold">Template Scope</h3>
        <p className="text-blue-950">
          Template Counter State: <strong className="text-xl">{count}</strong>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm mt-1"
        >
          Increment Template Counter
        </button>
      </div>
      {children}
    </div>
  );
}

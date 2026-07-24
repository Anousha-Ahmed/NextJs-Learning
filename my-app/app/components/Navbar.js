"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [message, setMessage] = useState("");

  return (
    <nav
      style={{
        background: "#1f2937",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>Next.js Tutorial</h2>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>
          Blog
        </Link>

        <Link
          href="/server-fetch"
          style={{ color: "white", textDecoration: "none" }}
        >
          Server Fetch
        </Link>
      </div>

      {/* Button */}
      <div>
        <button
          onClick={() => setMessage("Welcome!")}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>

        {message && (
          <p
            style={{
              marginTop: "8px",
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </nav>
  );
}
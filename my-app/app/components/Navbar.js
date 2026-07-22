"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [message, setMessage] = useState("");

  return (
    <>
      <nav style={{ background: "#333", padding: "15px", color: "white" }}>
        <Link href="/" style={{ marginRight: "20px", color: "white" }}>
          Home
        </Link>

        <Link href="/about" style={{ marginRight: "20px", color: "white" }}>
          About
        </Link>

        <Link href="/blog" style={{ color: "white" }}>
          Blog
        </Link>

        <div
          style={{
            width: "120px",
            border: "1px solid white",
            padding: "10px",
            display: "inline-block",
            marginLeft: "1050px",
            verticalAlign: "middle",
          }}
        >
          <button onClick={() => setMessage("Welcome")}>
            Click Me
          </button>

          <p>{message}</p>
        </div>
      </nav>
    </>
  );
}
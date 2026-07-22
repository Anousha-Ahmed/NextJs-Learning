"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [message, setMessage] = useState("Welcome!");

  return (
    <>
      <nav style={{ background: "#333", padding: "15px" }}>
        <Link href="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
        <Link href="/about" style={{ marginRight: "20px", color: "white" }}>About</Link>
        <Link href="/blog" style={{ color: "white" }}>Blog</Link>
      </nav>

      <div style={{ padding: "10px" }}>
        <button onClick={() => setMessage("You clicked the button!")}>Click Me</button>
        <p>{message}</p>
      </div>
    </>
  );
}

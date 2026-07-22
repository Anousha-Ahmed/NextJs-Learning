import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '15px', color: 'white' }}>
      <Link href="/" style={{ marginRight: '20px', color: 'white' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '20px', color: 'white' }}>About</Link>
      <Link href="/blog" style={{ color: 'white' }}>Blog</Link>
    </nav>
  );
}
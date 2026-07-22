import Image from 'next/image';

 function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple multi-page app.</p>
      
      {/* Image optimization example */}
      <Image 
        src="/stuff.jpg" 
        alt="Sample" 
        width={100} 
        height={100} 
      />
    </div>
  );
}
export default Home
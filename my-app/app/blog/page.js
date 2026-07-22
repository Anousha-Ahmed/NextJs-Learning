import Link from "next/link"

// sample blog data
const posts = [
    {id:1 , title:"First Blog Post"},
    {id:2 , title:"Second Blog Post"},
    {id:3 , title:"Third Blog Post"}
]

const blog = () => {
  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map((post)=>(
        <div key={post.id} style={{ margin: '10px 0' }}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
      <br />
      <Link href="/">← Back to Home</Link>
    </div>
  )
}

export default blog

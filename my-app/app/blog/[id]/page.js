// This is the dynamic route page
// /blog/1, /blog/2, etc.
import Link from "next/link"
// Sample data
const posts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of first post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of second post.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the content of third post.' },
  ];

  // dynamic metadata
  export async function generateMetadata({params}){
    const {id} = await params;
    const post = posts.find(p => p.id === Number(id)); // Get the ID from URL
    if(!post){
      return {
        title: "Post Not Found",
        description: "The requested blog post does not exist.",
      };
    }
    return{
      title : post.title,
      description : post.content,
    };
  }

  // dynamic page route
  export default async function blogPost({params}){
    const {id} = await params;
    const post = posts.find(p => p.id === Number(id)); // Get the ID from URL
    if (!post) {
      return <h2>Post not found!</h2>;
    }
    return(
      <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <br />
          <Link href="/blog">← Back to Blog</Link>
      </div>
    )
}

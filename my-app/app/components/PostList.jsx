export default async function PostList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();

  return (
    <>
      <h2>Post List Title</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <br />
        </div>
      ))}
    </>
  );
}

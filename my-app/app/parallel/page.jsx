export default async function ParallelPage() {
    const [postRes, userRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=3"),
      fetch("https://jsonplaceholder.typicode.com/users?_limit=3"),
    ]);
  
    const posts = await postRes.json();
    const users = await userRes.json();
  
    return (
      <div>
        <h1>Parallel Data Fetching</h1>
  
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
  
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
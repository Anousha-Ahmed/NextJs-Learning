export default async function ServerFetch(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"); // run on server not browser and give browser ready made HTML that's why called server component
    const posts = await res.json();

    return(
        <div>
            <h2>Server Fetch Example</h2>
            <br/>
            {
                posts.map(post=>(
                    <div key={post.id}>
                        <h3>Title :{post.title}</h3>
                        <p>Content :{post.body}</p>
                        <br/>
                    </div>
                ))
            }
        </div>
    )
}
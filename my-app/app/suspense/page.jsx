import PostList from "../components/PostList";
import { Suspense } from "react";
export default function SuspensePage() {
  return (
    <div>
      <h2>Suspense Loading</h2>
      <Suspense fallback={<h2>Loading Posts...</h2>}>
        <PostList />
      </Suspense>
    </div>
  );
}

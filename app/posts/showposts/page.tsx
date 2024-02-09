"use client";
import { selectPost } from "@/redux/slices/selector";
import { useSelector } from "react-redux";
function Page() {
  const allPosts = useSelector(selectPost);
  const posts = allPosts;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;

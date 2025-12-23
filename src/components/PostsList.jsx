import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <ul className={classes.posts}>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </ul>
  );
}

export default PostList;

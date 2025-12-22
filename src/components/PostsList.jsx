import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostList({ onStopPosting, modalIsVisible }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal close={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        {posts.length === 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>No posts yet</h2>
            <p>Start adding some!</p>
          </div>
        )}
      </ul>
    </>
  );
}

export default PostList;

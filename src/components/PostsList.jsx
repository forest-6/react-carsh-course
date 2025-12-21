import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Menual" body="This is a Post1 component." />
      <Post author="Maximilian" body="This is a Post2 component." />
    </ul>
  );
}

export default PostList;

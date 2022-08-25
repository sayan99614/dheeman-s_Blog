import React from "react";
import PostItem from "./PostItem";
import classes from "./postgrid.module.css";
function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;

import React from "react";
import PostGrid from "./PostGrid";
import styles from "./allposts.module.css";
function AllPosts({ posts }) {
  return (
    <div className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </div>
  );
}

export default AllPosts;

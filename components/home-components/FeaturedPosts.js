import React from "react";
import PostGrid from "../posts/PostGrid";
import styles from "./featured-posts.module.css";
function FeaturedPosts({ posts }) {
  return (
    <div className={styles.latest}>
      <PostGrid posts={posts} />
    </div>
  );
}

export default FeaturedPosts;

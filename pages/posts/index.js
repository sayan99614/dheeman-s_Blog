import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-util";

export default function AllPost({ posts }) {
  return (
    <>
      <Head>
        <title>All blog posts</title>
        <meta name="react" content="React js" />
        <meta
          about="blog_posts"
          name="blogs"
          content="this is the place where you get all blogs from me"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allposts = getAllPosts();

  return {
    props: {
      posts: allposts,
    },
  };
}

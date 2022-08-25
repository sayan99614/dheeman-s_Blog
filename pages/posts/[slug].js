import Head from "next/head";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getAllPosts, getPostData } from "../../lib/post-util";

export default function PostDetail({ post }) {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={post.title} content={post.excert} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticPaths() {
  const slugs = getAllPosts().map((post) => post.slug);
  const paths = slugs.map((s) => ({
    params: { slug: s },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  const slug = context.params.slug;
  const data = getPostData(slug);
  return {
    props: {
      post: data,
    },
  };
}

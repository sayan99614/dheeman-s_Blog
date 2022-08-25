import Head from "next/head";
import FeaturedPosts from "../components/home-components/FeaturedPosts";
import Hero from "../components/home-components/Hero";
import { getFeaturedPots } from "../lib/post-util";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dheeman&apos;s Blogs </title>
        <meta
          name="home"
          content="this is my blog website where i blog about frontend technologies like react, vue and backend technologies like node js and spring framework"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPots();

  return {
    props: {
      posts,
    },
  };
}

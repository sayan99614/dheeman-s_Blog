import fs from "fs";
import path from "path";
import matter from "gray-matter";
const fileDirectory = path.join(process.cwd(), "posts");

export function getPostData(filename) {
  const postSlug = filename.replace(/\.md$/, "");
  const filePath = path.join(fileDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(fileDirectory);
  const posts = postFiles.map((postFile) => getPostData(postFile));

  return posts;
}

export function getFeaturedPots() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((post) => post.isFeatured);

  return featuredPosts;
}

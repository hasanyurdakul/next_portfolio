import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../../components/Post";
import { sortByDate } from "../../utils";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div className="pt-28 pb-16 max-w-lg font-mono">
      <Head>
        <title>Blog | Hasan Yurdakul</title>
      </Head>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mt-5 pr-8 pl-8">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

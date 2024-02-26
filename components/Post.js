import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="block overflow-hidden  border-black border-2 bg-white px-4 py-4 font-mono">
      <h3 className="text-xl font-bold">{post.frontmatter.title}</h3>
      <img className="pb-4" src={post.frontmatter.cover_image} alt="" />

      <Link href={`/blog/${post.slug}`}>
        <a className="inline-flex px-12 py-3 text-sm font-medium text-white bg-black  hover:bg-white hover:text-black hover:border-black hover:border-2   sm:w-auto focus:outline-none ">
          Read More
        </a>
      </Link>
    </div>
  );
}

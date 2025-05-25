import Link from "next/link";
import { fetchBlogs } from "../../lib/strapi";
export default async function BlogList() {
  const posts = await fetchBlogs();
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.Title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

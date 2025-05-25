import { fetchBlogBySlug, fetchBlogs } from "../../../lib/strapi";
import DynamicContent from "../../../components/DynamicContent";
export async function generateStaticParams() {
  const posts = await fetchBlogs(); // Get all slugs

  return posts.map((post) => ({ slug: post.slug }));
}
export default async function BlogPage({ params }) {
  const { slug } = params;
  const post = await fetchBlogBySlug(slug);

  if (!post) return <p>Post not found.</p>;

  const { Title, Auther, content } = post;

  return (
    <article>
      <DynamicContent content={content} title={Title} author={Auther} />
    </article>
  );
}

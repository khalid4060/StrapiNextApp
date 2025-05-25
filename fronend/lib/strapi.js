export async function fetchBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?pLevel`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data.data;
}

export async function fetchBlogBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&pLevel`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data.data[0];
}

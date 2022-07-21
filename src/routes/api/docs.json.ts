export async function GET() {
  const allPostFiles = import.meta.glob("../docs/*.svelte.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postSlug = path.slice(
        path.indexOf("/docs/") + 6,
        path.lastIndexOf(".svelte"),
      );

      return {
        meta: metadata,
        slug: postSlug,
      };
    }),
  );
  return {
    body: allPosts,
  };
}

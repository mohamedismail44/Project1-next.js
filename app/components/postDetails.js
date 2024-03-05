

export default async function PostDetails({ postNum }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postNum}`,
    {
      // cache: "no-store",
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();
  return (
    <section className="container mx-auto p-4">
      <div className="   text-center bg-orange-600  m-1 p-2">
        <h1 className="text-2xl font-semibold">{posts.title}</h1>
        <hr />
        <div>{posts.body}</div>
      </div>
    </section>
  );
}

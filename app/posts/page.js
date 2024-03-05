import Link from "next/link";

export const metadata = {
  title: "Posts",
};
export default async function AllPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store",
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  return (
    <section className="container mx-auto p-4">
      <div className=" grid grid-cols-3 gap-2">
        {posts.map((ele, index) => (
          <Link href={`/posts/${ele.id}`}>
            <div
              key={index}
              className="h-56 text-center bg-orange-600  m-1 p-2"
            >
              <h1 className="text-2xl font-semibold ">{ele.title}</h1>
              <hr />
              <p>{ele.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

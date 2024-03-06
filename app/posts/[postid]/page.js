import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export const metadata = {
  title: "Post Details",
};
export default async function AllPost(props) {
  const postNum = props.params.postid;
  console.log(props);
  return (
    <section className="container mx-auto p-4">
      <h1>Post Details</h1>
      <Suspense
        fallback={<div className="text-5xl font-bold">Please Wait</div>}
      >
        <PostDetails postNum={postNum} />
      </Suspense>
    </section>
  );
}

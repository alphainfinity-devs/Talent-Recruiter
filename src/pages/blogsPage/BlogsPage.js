import React from "react";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import { useGetBlogPostsQuery } from "../../features/blogPost/blogPostAPI";
import BlogCart from "../homePage/homePageComponents/BlogCart";

const BlogsPage = () => {
  const { data: getPosts, isLoading, error } = useGetBlogPostsQuery();
  // decide what to show based on the state
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (error) content = <div>Something went wrong</div>;
  if (getPosts)
    content = (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {getPosts.posts.map((post) => (
          <BlogCart key={post._id} blog={post} />
        ))}
      </div>
    );
  return (
    <>
      <PageTitleBanner title="Blog Page" />
      <h1 className="text-2xl text-center font-bold my-4">Blogs Page</h1>
      {content}
    </>
  );
};

export default BlogsPage;

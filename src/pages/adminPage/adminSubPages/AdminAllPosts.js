import React from "react";
import { Link } from "react-router-dom";
import { useGetBlogPostsQuery } from "../../../features/blogPost/blogPostAPI";
import { FiExternalLink } from "react-icons/fi";
import AdminBlogCard from "../adminPageComponents/AdminBlogCard";
import Spinner from "../../../utils/Spinner";
import Alert from "../../../utils/Alert";

const AdminAllPosts = () => {
  const { data: getPosts, isLoading, error } = useGetBlogPostsQuery();
  // decide what to show based on the state
  let content = null;
  if (isLoading) content = <Spinner />;
  if (error) content = <Alert alert="Something went wrong" />;
  if (getPosts)
    content = (
      <>
        {getPosts.posts.map((post) => (
          <AdminBlogCard key={post._id} blog={post} />
        ))}

        {getPosts.posts.length > 2 && (
          <Link to={"/blogs"}>
            <button className="flex mx-auto items-center text-success btn btn-outline uppercase my-4 font-bold">
              <FiExternalLink size={20} className="mr-2" /> Load More
            </button>
          </Link>
        )}
      </>
    );

  return (
    <div className="grid md:grid-cols-3 md:mx-1 mx-2 grid-cols-1 gap-4">
      {content}
    </div>
  );
};

export default AdminAllPosts;

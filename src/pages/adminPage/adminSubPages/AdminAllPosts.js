import React, { useEffect, useState } from "react";
import { useGetBlogPostsQuery } from "../../../features/blogPost/blogPostAPI";
import { FiExternalLink } from "react-icons/fi";
import AdminBlogCard from "../adminPageComponents/AdminBlogCard";
import Spinner from "../../../utils/Spinner";
import Alert from "../../../utils/Alert";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const AdminAllPosts = () => {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const {
    data: getPosts,
    isLoading,
    error,
  } = useGetBlogPostsQuery(
    { chunkLimit: 3, limit },
    {
      refetchOnMountOrArgChange: true,
    },
  );
  useEffect(() => {
    if (getPosts?.totalPages === page) {
      toast.info("No more posts to load", {
        toastId: "info",
      });
    }
  }, [getPosts?.totalPages, page]);

  // decide what to show based on the state
  let content = null;
  if (isLoading) {
    content = (
      <>
        <div className="flex justify-center mx-auto">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="105"
            visible={true}
          />
        </div>
        <div className="flex justify-center mx-auto">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="105"
            visible={true}
          />
        </div>
        <div className="flex justify-center mx-auto">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="105"
            visible={true}
          />
        </div>
      </>
    );
  }
  if (error) {
    toast.error("There is an error please try again", {
      toastId: "error",
    });
  }
  if (getPosts) {
    content = (
      <>
        {getPosts.posts.map((post) => (
          <AdminBlogCard key={post._id} blog={post} />
        ))}
      </>
    );
  }
  const handleLoadMore = () => {
    setLimit((prev) => prev + 3);
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <h1 className="text-center text-2xl my-3">
        Total Blog {getPosts?.totalPost}
      </h1>
      <div className="grid md:grid-cols-3 md:mx-3 mx-2 my-3 grid-cols-1 gap-4">
        {content}
      </div>
      {getPosts?.totalPost > 3 && getPosts?.totalPages === page ? (
        ""
      ) : (
        <button
          onClick={handleLoadMore}
          className="flex mx-auto items-center text-success btn btn-outline uppercase my-4 font-bold">
          <FiExternalLink size={20} className="mr-2" /> Load More
        </button>
      )}
    </>
  );
};

export default AdminAllPosts;

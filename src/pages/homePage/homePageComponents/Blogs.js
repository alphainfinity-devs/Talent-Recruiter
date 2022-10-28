import { useGetBlogPostsQuery } from "../../../features/blogPost/blogPostAPI";
import BlogCart from "./BlogCart";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import BlogPlaceholder from "../../../utils/BlogPlaceholder";
import Alert from "../../../utils/Alert";

function Blogs() {
  const {
    data: getPosts,
    isLoading,
    error,
  } = useGetBlogPostsQuery({ chunkLimit: 0, limit: 3 });
  // decide what to show based on the state
  let content = null;
  if (isLoading) content = <BlogPlaceholder />;
  if (error) content = <Alert alert="Something went wrong" />;
  if (getPosts)
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {getPosts.posts.map((post) => (
            <BlogCart key={post._id} blog={post} />
          ))}
        </div>
        {getPosts.posts.length > 2 && (
          <Link to={"/blogs"}>
            <button className="flex mx-auto items-center rounded-none bg-primary hover:bg-accent mt-5 text-white btn btn-outline uppercase my-4 font-bold">
              <FiExternalLink size={20} className="mr-2" /> Load More
            </button>
          </Link>
        )}
      </>
    );
  return (
    <section className="container mx-auto px-5 pt-16 pb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
          Blog & Career Tips
        </h2>
        <p className="text-natural text-sm font-bold py-1">
          Most popular blog of this website, created by expert
        </p>
      </div>
      {content}
    </section>
  );
}

export default Blogs;

import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
const BlogCart = ({ blog }) => {
  const {
    post_title,
    post_description,
    post_image,
    post_author,
    post_category,
    post_date,
  } = blog;

  return (
    <div className="shadow-md relative border border-gray-400 rounded">
      <figure className="pb-4 relative">
        {/*........... blog image ..........*/}
        <img src={post_image} alt="Shoes" className="h-[250px] w-full" />

        {/*............ Date badge .............*/}
        <div className="flex justify-evenly gap-2 badge-primary bottom-8 left-5 text-base-100 p-2 rounded absolute">
          <h5 className="flex items-center left-5">
            <MdDateRange size={20} className="mr-2"/>
            {post_date}
          </h5>
        </div>
      </figure>

      {/*...........blog info.............*/}
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="rounded-full bg-primary bg-opacity-90 text-white p-2">Category: {post_category}</h2>
          <h2 className="rounded-full bg-primary bg-opacity-90 text-white p-2">Author: { post_author}</h2>
        </div>
        <h2 className="text-xl text-accent font-bold py-4 hover:text-primary">
          <Link to="#">{post_title}</Link>
        </h2>
        <p className="text-[16px] text-natural font-medium pb-4 ">
          {post_description.length > 150
            ? post_description.slice(0, 150) + "..."
            : post_description}
        </p>
        {
          <div className="card-actions justify-end underline">
            <button className="text-secondary uppercase font-bold">
              Read More
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default BlogCart;

import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { BsArrowRight, BsStack } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

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
    <div className="shadow-md hover:shadow-lg relative hover:-translate-y-2 duration-700">
      <figure className="pb-2 relative">
        {/*........... blog image ..........*/}
        <img src={post_image} alt="Shoes" className="h-[200px] w-full" />

        {/*............ Date badge .............*/}
        <div className="flex justify-evenly gap-2 badge-primary bottom-8 left-5 text-base-100 p-2 rounded absolute">
          <p className="flex items-center left-5 text-sm">
            <MdDateRange size={20} className="mr-2" />
            {post_date}
          </p>
        </div>
      </figure>

      {/*...........blog info.............*/}
      <div className="px-5 py-2">
        <div className="flex justify-between">
          <p className="rounded-full bg-primary bg-opacity-90 text-white p-1 text-xs flex justify-center items-center gap-2">
            <FaUserEdit /> {post_author}
          </p>
          <p className="rounded-full bg-primary bg-opacity-90 text-white p-1 text-xs flex justify-center items-center gap-2">
            <BsStack />
            {post_category}
          </p>
        </div>
        <h2 className="text-xl text-accent font-bold py-3 hover:text-primary">
          <Link to="#">{post_title}</Link>
        </h2>
        <p className="text-[16px] text-natural font-medium pb-3 ">
          {post_description.length > 150
            ? post_description.slice(0, 150) + "..."
            : post_description}
        </p>
        {
          <div className="card-actions justify-start">
            <button className="text-primary hover:text-accent hover:translate-x-5 duration-700 text-sm pb-2 flex justify-center items-center gap-2">
              Read More <BsArrowRight />
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default BlogCart;

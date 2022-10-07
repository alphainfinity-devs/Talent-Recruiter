import { Link } from "react-router-dom";

const BlogCart = ({ blog }) => {
  const { description, title, img } = blog;

  return (
    <div className="shadow-md relative">
      <figure className="pb-4 relative">
        {/*........... blog image ..........*/}
        <img src={img} alt="Shoes" className="h-[250px] w-full" />

        {/*............ Date badge .............*/}
        <div className="flex gap-2 badge-primary bottom-8 left-5 text-base-100 p-2 rounded absolute">
          <i className="ri-calendar-todo-fill"></i>
          <p>24th March 2022</p>
        </div>
      </figure>

      {/*...........blog info.............*/}
      <div className="p-5">
        <h2 className="text-xl text-accent font-bold py-4 hover:text-primary">
          <Link to="#">{title}</Link>
        </h2>
        <p className="text-[16px] text-natural font-medium pb-4 ">
          {description}
        </p>
        <div className="card-actions justify-end underline">
          <button className="text-secondary uppercase font-bold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;

import BlogCart from "./BlogCart";

function Blogs() {
  const blogs = [
    {
      _id: 1,
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/blod-details/1.jpg",
    },
    {
      _id: 2,
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/blod-details/1.jpg",
    },
    {
      _id: 3,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/blod-details/1.jpg",
    },
  ];
  return (
    <section className="container mx-auto px-5 pt-16 pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-primary font-bold">Blog & News</h2>
        <p className="text-natural">
          Most popular blog of this website, created by expart
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <BlogCart key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;

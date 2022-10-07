import ReviewCart from "./ReviewCart";

function Reviews() {
  const reviews = [
    {
      _id: 1,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
    {
      _id: 2,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
    {
      _id: 3,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
    {
      _id: 4,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
    {
      _id: 5,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
    {
      _id: 6,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      img: "https://preview.uideck.com/items/thehunt/assets/img/testimonial/img2.png",
    },
  ];
  return (
    <section className="bg-[#F9FCFF]">
      <div className="container mx-auto px-5 pt-16 pb-16 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-primary font-bold">
            Review From Client
          </h2>
          <p className="text-natural">
            Most popular blog of this website, created by expart
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {reviews.map((review) => (
            <ReviewCart key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

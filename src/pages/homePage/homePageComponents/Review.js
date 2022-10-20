// import Swiper core and required modules
import { Autoplay, Pagination, Navigation, A11y } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
    {
      _id: 1,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      position: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 2,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      profetion: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 3,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      position: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 4,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      position: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 5,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      position: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 6,
      comment: "Cras accumsan nulla nec lacus ultricies placerat.",
      name: "Nayim Hossen",
      position: "ceo",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="card rounded-none bg-[#d0ffce] shadow-xl">
            <figure className="pt-5">
              <img src={review.img} alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose</p>
              <div className="card-actions">
                <div className="flex text-[gold]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Review;

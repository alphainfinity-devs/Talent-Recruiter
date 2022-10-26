import React from "react";
import Review from "./Review";

const ReviewCart = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-5 pt-16 pb-16 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            Clients Review
          </h2>
          <p className="text-natural text-sm font-bold py-1">
            Most popular blog of this website, created by expart
          </p>
        </div>
        <div>
          <Review />
        </div>
      </div>
    </section>
  );
};

export default ReviewCart;

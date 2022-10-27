import React from "react";

const CategorieCart = (categorie) => {
  const { name, availableJob, icon } = categorie.categorie;
  return (
    <div className="flex justify-start items-center bg-base-100 shadow gap-4 px-5 py-5 cursor-pointer hover:-translate-y-1 duration-700 hover:shadow-lg border-white border hover:border-primary">
      <div className="bg-primary p-4 text-white text-2xl">{icon}</div>
      <div className="">
        <h2 className="font-bold text-xl text-accent">{name}</h2>
        <p className="text-primary font-bold">{availableJob} Jobs</p>
      </div>
    </div>
  );
};

export default CategorieCart;

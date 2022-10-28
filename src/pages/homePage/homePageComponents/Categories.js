import React from "react";
// import { CgWebsite } from "react-icons/cg";
// import { BsMicrosoft } from "react-icons/bs";
// import { FcManager } from "react-icons/fc";
// import { TbDatabaseOff } from "react-icons/tb";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaDigitalTachograph } from "react-icons/fa";
// import { HiPhotograph, HiOutlineDesktopComputer } from "react-icons/hi";
import CategorieCart from "./CategorieCart";
import { useGetCategoryQuery } from "../../../features/category/categoryApi";

const Categories = () => {

  const {data ,isLoading,error,} = useGetCategoryQuery();
  const categories = data?.all_category
  // const categories = [
  //   {
  //     _id: 1,
  //     name: "Web & Software Dev",
  //     availableJob: 203,
  //     icon: <BsMicrosoft />,
  //   },
  //   {
  //     _id: 2,
  //     name: "Sales & Marketing",
  //     availableJob: 303,
  //     icon: <HiOutlineDesktopComputer />,
  //   },
  //   {
  //     _id: 3,
  //     name: "Graphics",
  //     availableJob: 120,
  //     icon: <HiPhotograph />,
  //   },
  //   {
  //     _id: 4,
  //     name: "UI/UX Designer",
  //     availableJob: 784,
  //     icon: <CgWebsite />,
  //   },
  //   {
  //     _id: 5,
  //     name: "Senior Manager",
  //     availableJob: 233,
  //     icon: <FcManager />,
  //   },
  //   {
  //     _id: 6,
  //     name: "SEO",
  //     availableJob: 78,
  //     icon: <TbDatabaseOff />,
  //   },
  //   {
  //     _id: 7,
  //     name: "Android Developer",
  //     availableJob: 70,
  //     icon: <AiFillAndroid />,
  //   },
  //   {
  //     _id: 8,
  //     name: "Digital Marketer",
  //     availableJob: 23,
  //     icon: <FaDigitalTachograph />,
  //   },
  // ];
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            Browse Category
          </h2>
          <p className="text-natural text-sm font-bold py-1">
            Most popular categories of portal, sorted by popularity
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {categories?.map((categorie) => (
            <CategorieCart
              key={categorie._id}
              categorie={categorie}
            ></CategorieCart>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../../features/category/categoryApi";
import axios from "axios";
import sanitizedString from "../../../utils/sanitizedString";
import useNavigateParams from "../../../hooks/useNavigateParams";

const SearchComponent = () => {
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, data, error } = useGetCategoryQuery();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/countries.json"
      )
      .then((res) => {
        setCountries(res.data.data);
      });
  }, []);
  const navigate = useNavigateParams();
  const onSubmit = async (data) => {
    const { category, keyword, location } = data;
    navigate("/search", {
      category: sanitizedString(category),
      location: sanitizedString(location),
      keyword: sanitizedString(keyword),
    });
    reset({
      category: "",
      location: "",
      keyword: "",
    });
  };

  // decide what to render for category
  let categoryContent;
  if (isLoading) {
    categoryContent = <option className="text-green-500">Loading</option>;
  } else if (error) {
    categoryContent = (
      <option className="text-red-500">Something went wrong</option>
    );
  } else if (data?.all_category?.length === 0) {
    categoryContent = (
      <option className="text-yellow-400">There is no Category</option>
    );
  } else if (data?.all_category?.length > 0) {
    categoryContent = data?.all_category.map((category) => (
      <option key={category._id} value={category.category}>
        {category.category}
      </option>
    ));
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="shadow-lg z-10 p-5 border bg-primary">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid sm:grid-cols-4 md:grid-cols-4 gap-1"
          >
            {/*........keyword type input........*/}
            <input
              type="text"
              required
              placeholder="Search Keyword"
              className="input w-full rounded-none input-bordered"
              {...register("keyword")}
            />
            {/*........select location input........*/}
            <select
              required
              defaultValue=""
              className="select select-bordered w-full rounded-none text-[tomato]"
              {...register("location")}
            >
              <option value="" disabled>
                Location
              </option>
              {
                // render all the country in the location option
                countries?.map((country, index) => (
                  <option key={index} value={country.country}>
                    {country.country}
                  </option>
                ))
              }
            </select>

            {/*.......select category input.......*/}
            <select
              required
              defaultValue=""
              className="select select-bordered w-full rounded-none text-[tomato]"
              {...register("category")}
            >
              <option value="" disabled>
                Category
              </option>
              {categoryContent}
            </select>
            {/*........search button..........*/}
            <button
              type="submit"
              className="btn rounded-none w-full duration-700 bg-[tomato] border-[tomato] hover:bg-accent py-3 text-white cursor-pointer font-bold"
            >
              <FaSearch className="mr-2" /> Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="shadow-lg z-10 p-5 border bg-primary">
          <form className="grid sm:grid-cols-4 md:grid-cols-4 gap-1">
            {/*........keyword type input........*/}
            <input
              type="text"
              placeholder="Search Keyword"
              className="input w-full rounded-none input-bordered"
            />
            {/*........selecte location input........*/}
            <select
              defaultValue="noValue"
              className="select select-bordered w-full rounded-none text-[tomato]"
            >
              <option value="noValue" disabled>
                Location
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Unitad State</option>
              <option>London</option>
              <option>Pakistan</option>
              <option>Singapur</option>
            </select>

            {/*.......selecte category input.......*/}
            <select
              defaultValue="noValue"
              className="select select-bordered w-full rounded-none text-[tomato]"
            >
              <option value="noValue" disabled>
                Category
              </option>
              <option>Designer</option>
              <option>Software Engineer</option>
              <option>Web Developer</option>
              <option>UI/UX Designer</option>
              <option>Content Writer</option>
              <option>Markating</option>
            </select>
            {/*........search button..........*/}
            <button className="btn rounded-none w-full bg-[tomato] border-[tomato] hover:bg-accent py-3 text-white cursor-pointer font-bold">
              <FaSearch className="mr-2" /> Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

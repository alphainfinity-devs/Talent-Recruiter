import React from "react";

const SearchComponent = () => {
  return (
    <section>
      <div className="container mx-auto px-5 pt-10">
        <div className="shadow-lg z-10 p-5 md:p-10 border bg-primary">
          <form className="grid sm:grid-cols-2 md:grid-cols-4 gap-1">
            {/*........keyword type input........*/}
            <input
              type="text"
              placeholder="Search Keyword"
              className="input w-full rounded-none input-bordered"
            />
            {/*........selecte location input........*/}
            <select
              defaultValue="noValue"
              className="select select-bordered w-full rounded-none"
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
              className="select select-bordered w-full rounded-none"
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
            <input
              type="submit"
              value="Search"
              className="btn rounded-none w-full bg-[tomato] border-[tomato] hover:bg-accent py-3 text-white cursor-pointer font-bold"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

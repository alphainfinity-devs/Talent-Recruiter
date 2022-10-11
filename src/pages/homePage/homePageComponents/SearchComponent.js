import React from "react";

const SearchComponent = () => {
  return (
    <section>
      <div className="m-[-100px] container mx-auto px-5 pb-40">
        <div className="bg-primary shadow-lg z-10 p-10">
          <form className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
            {/*........keyword type input........*/}
            <input
              type="text"
              placeholder="Search Keyword"
              className="input w-full max-w-xs rounded-none"
            />
            {/*........selecte location input........*/}
            <select defaultValue="noValue" className="select w-full max-w-xs rounded-none">
              <option value="noValue" disabled >
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
            <select defaultValue="noValue" className="select w-full max-w-xs rounded-none">
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
              className="btn rounded-none w-full bg-secondary hover:bg-primary py-2 text-white border-white cursor-pointer hover:border-white font-bold border-2 hover:border-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

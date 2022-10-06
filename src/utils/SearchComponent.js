import React from "react";

const SearchComponent = () => {
  return (
    <section>
      <div className="  m-[-100px] container mx-auto px-5">
        <div className="bg-accent shadow-lg z-10 p-10">
          <form class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search Keyword"
              className="input w-full max-w-xs"
            />
            {/* selecte location input */}
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Location
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Unitad State</option>
              <option>London</option>
              <option>Pakistan</option>
              <option>Singapur</option>
            </select>

            {/* selecte category input */}
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Designer</option>
              <option>Software Engineer</option>
              <option>Web Developer</option>
              <option>UI/UX Designer</option>
              <option>Content Writer</option>
              <option>Markating</option>
            </select>
            {/* submit button */}
            <input
              type="submit"
              value="Search"
              className="btn w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

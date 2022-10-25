import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDoSearchQuery } from "../../features/search/searchApi";
import SearchComponent from "../homePage/homePageComponents/SearchComponent";
import JobListCard from "../jobPage/jobPageComponents/JobListCard";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const location = searchParams.get("location");
  const category = searchParams.get("category");
  const { isLoading, data, error } = useDoSearchQuery({
    keyword,
    location,
    category,
  });
  console.log(data);
  // decide what to render
  let content;
  if (isLoading) {
    content = <div className="text-green-500 text-xl text-center">Loading</div>;
  } else if (error) {
    content = (
      <div className="text-red-500 text-xl text-center">
        Something went wrong
      </div>
    );
  } else if (data?.searchResult?.length === 0) {
    content = (
      <div className="text-yellow-400 text-xl text-center">
        There is no result
      </div>
    );
  } else if (data?.searchResult?.length > 0) {
    content = (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
        {data.searchResult.map((item) => (
          <JobListCard key={item._id} job={item} />
        ))}
      </div>
    );
  }
  return (
    <>
      <h3 className="text-center text-3xl my-5 capitalize"> search page</h3>
      <SearchComponent />
      {content}
    </>
  );
};


export default SearchPage;

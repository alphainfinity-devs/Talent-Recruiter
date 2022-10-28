import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDoSearchQuery } from "../../features/search/searchApi";
import SearchComponent from "../homePage/homePageComponents/SearchComponent";
import JobListCard from "../jobPage/jobPageComponents/JobListCard";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import JobPlaceholder from "../../utils/JobPlaceholder";
import Alert from "../../utils/Alert";

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
    content = <JobPlaceholder />;
  } else if (error) {
    content = <Alert alert="Something went wrong" />;
  } else if (data?.searchResult?.length === 0) {
    content = <Alert alert="No job found" />;
  } else if (data?.searchResult?.length > 0) {
    content = (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 container mx-auto px-5">
        {data.searchResult.map((item) => (
          <JobListCard key={item._id} job={item} />
        ))}
      </div>
    );
  }
  return (
    <>
      <PageTitleBanner title="Search Page" />
      <div className="container mx-auto px-5 my-5">
        <SearchComponent />
      </div>
      {content}
    </>
  );
};

export default SearchPage;

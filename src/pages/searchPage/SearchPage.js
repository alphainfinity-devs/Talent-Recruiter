import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDoSearchQuery } from "../../features/search/searchApi";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const location = searchParams.get("location");
    const category = searchParams.get("category");
    const { isLoading, data, error } = useDoSearchQuery({ keyword, location, category });
    console.log(data);
    return (<div>this is search page
      <h3>hello search result</h3>
  </div>);
};

export default SearchPage;

import React from "react";
import SearchBar from "../components/search/SearchBar";

const Search = () => {

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="search-page">
      <h1>Search Medicines</h1>

      <SearchBar onSearch={handleSearch} />

    </div>
  );
};

export default Search;
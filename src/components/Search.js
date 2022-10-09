import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="home-search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        id="searchBar"
      />
    </div>
  );
}

export default Search;

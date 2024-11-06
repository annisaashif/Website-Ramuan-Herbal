/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    } else {
      alert("Please enter a search query.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Cari . . ."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full py-4 pl-4 pr-10 text-gray-600 bg-gray-100 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <FaSearch
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchInput;

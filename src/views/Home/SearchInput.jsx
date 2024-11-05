import { FaSearch } from "react-icons/fa"; // Import the search icon

function SearchInput() {
  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Cari . . ."
          className="w-full py-4 pr-10 pl-4 text-gray-600 bg-gray-100 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <FaSearch className="absolute right-3 text-gray-600" />
      </div>
    </div>
  );
}

export default SearchInput;

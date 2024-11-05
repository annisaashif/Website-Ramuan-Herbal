import { FaSearch } from "react-icons/fa"; // Import the search icon

function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari . . ."
        className="w-full py-4 pl-4 pr-12 text-gray-600 bg-gray-100 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <FaSearch className="text-gray-600" />
      </div>
    </div>
  );
}

export default SearchInput;

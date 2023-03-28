import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="rounded-lg p-2 border border-gray-200 w-full flex">
      <SearchIcon />
      <input
        type="search"
        placeholder="search ..."
        className="w-full px-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;

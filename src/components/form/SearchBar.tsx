import { Target } from "../../utils/type";
import SearchIcon from "../icons/SearchIcon";
interface TextFieldProps {
  placeholder?: string;
  handelChange: (event: Target) => any;
  value: any;
}
const SearchBar = ({ placeholder, handelChange, value }: TextFieldProps) => {
  return (
    <div className="rounded-lg p-2 border border-gray-200 w-full flex">
      <SearchIcon />
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={handelChange}
        className="w-full px-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;

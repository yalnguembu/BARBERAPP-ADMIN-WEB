import { Link } from "react-router-dom";
import SearchBar from "./form/SearchBar";
type NavBarProps = {
  create?: boolean;
};
const NavBar = ({ create }: NavBarProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-between py-4 px-8 pr-12 border-b bg-white">
      <ul className="flex flex-row">
        <li>
          <Link to="/services" className="block p-4 font-bold">
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/services/reservations"
            className="block p-4 font-bold text-gray-400"
          >
            Reservations
          </Link>
        </li>
      </ul>
      <div className="flex">
        <div className="w-96">
          <SearchBar />
        </div>
        {create ? (
          <Link
            to="/services/new"
            className="px-4 py-3 ml-4 rounded-lg border bg-yellow-300"
          >
            Create service
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default NavBar;

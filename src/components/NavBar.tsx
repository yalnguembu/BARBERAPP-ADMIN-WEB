import { Link, useLocation } from "react-router-dom";
type NavBarProps = {
  create?: boolean;
};
const NavBar = ({ create }: NavBarProps) => {
  const path = useLocation().pathname;
  const isInclueInPath = (value: string) => path.search(value);

  return (
    <div className="w-full flex flex-row items-center justify-between py-4 px-8 pr-12 border-b bg-white">
      <ul className="flex flex-row">
        <li>
          <Link
            to="/services"
            className={`block p-4 ${
              isInclueInPath("services") !== -1 &&
              isInclueInPath("reservations") == -1
                ? "font-bold"
                : "text-gray-400"
            } `}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/services/reservations"
            className={`block p-4 ${
              isInclueInPath("reservations") !== -1
                ? "font-bold"
                : "text-gray-400"
            } `}
          >
            Reservations
          </Link>
        </li>
      </ul>
      <div className="flex">
        {create ? (
          <Link
            to="/services/new"
            className="px-4 py-3 ml-4 rounded-lg bg-gray-900 text-white"
          >
            Create service
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default NavBar;

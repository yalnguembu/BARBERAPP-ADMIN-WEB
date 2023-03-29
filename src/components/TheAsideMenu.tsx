import { Link, useLocation } from "react-router-dom";
import user from "../assets/images/user.png";
import DashboardIcon from "./icons/DashboardIcon";
import GroupIcon from "./icons/GroupIcon";
import ListIcon from "./icons/ListIcon";
import MallBagIcon from "./icons/MallBagIcon";
import SettingIcon from "./icons/SettingIcon";

const TheAsideMenu = () => {
  const path = useLocation().pathname;
  const isInclueInPath = (value: string) => path.search(value);

  return (
    <div className="h-full overflow-y-auto w-60 border-r border-lightgray-100 p-6">
      <div className="user py-6 text-center">
        <img
          src={user}
          alt=""
          className="rounded-full w-24 h-24 mx-auto mt-4 mb-2"
        />
        <h3 className="font-bold text-md  text-gray-800">Admin User</h3>
        <button className="rounded-full px-4 text-sm border border-gray-300 mt-2 hover:bg-black hover:text-gray-100">
          Edit
        </button>
      </div>
      <div className="">
        <ul>
          <li>
            <Link
              to="/"
              className={`p-4 block rounded-lg ${
                path === "/" ? "bg-gray-200" : "text-gray-500"
              }`}
            >
              <DashboardIcon />
              <span className="ml-2 align-middle">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className={`p-4 block rounded-lg ${
                isInclueInPath("services") !== -1
                  ? "bg-gray-200"
                  : "text-gray-500"
              }`}
            >
              <ListIcon />
              <span className="ml-2 align-middle">Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="store"
              className={`p-4 block rounded-lg ${
                isInclueInPath("store") !== -1 ? "bg-gray-200" : "text-gray-500"
              }`}
            >
              <MallBagIcon /> <span className="ml-2 align-middle">Store</span>
            </Link>
          </li>
          <li>
            <Link
              to="users"
              className={`p-4 block rounded-lg ${
                isInclueInPath("users") !== -1 ? "bg-gray-200" : "text-gray-500"
              }`}
            >
              <GroupIcon /> <span className="ml-2 align-middle">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={`p-4 block rounded-lg ${
                isInclueInPath("settings") !== -1
                  ? "bg-gray-200"
                  : "text-gray-500"
              }`}
            >
              <SettingIcon />
              <span className="ml-2 align-middle">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheAsideMenu;

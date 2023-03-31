import ListIcon from "../components/icons/ListIcon";
import GroupIcon from "../components/icons/GroupIcon";
import ServiceBackroundImage from "@/assets/images/1.png";
import { Link } from "react-router-dom";

const DashBord = () => {
  return (
    <div className="w-full px-4">
      <h2 className="text-xl py-6">Statistic</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-8 ">
        <div className="p-6 bg-yellow-300 rounded-lg h-64 text-center">
          <div className="p-6 border-4 border-gray-800 rounded-full w-24 h-24 mx-auto my-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 stroke-2 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          <p className="font-bold text-4xl ml-12text-gray-800">
            1235 <span className="text-sm align-top font-normal">users</span>
          </p>
          <p className="my-3 font-600">Registed this month</p>
        </div>
        <div className="p-6 shadow border rounded-lg h-64 text-center bg-gray-100">
          <div className="p-6 border-4 border-yellow-500 rounded-full w-24 h-24 mx-auto my-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 stroke-yellow-500 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
          <p className="font-bold text-4xl">36</p>
          <p className="text-gray-700 my-3">Scheduled reservations</p>
        </div>
        <div className="p-6 bg-gray-400 rounded-lg h-64 text-center">
          <p className="font-bold">Most reseved</p>
          <div className="grid grid-cols-3  gap-3 mx-auto my-6 w-full xl:w-4/5">
            <div className="rounded-lg border border-gray-500 py-4">
              <p className="text-sm">Mon</p>
              <p className="font-bold">23</p>
            </div>
            <div className="rounded-lg border border-yellow-500 bg-yellow-500 py-4">
              <p className="text-sm">Tue</p>
              <p className="font-bold">24</p>
            </div>
            <div className="rounded-lg border border-gray-500 py-4">
              <p className="text-sm">Wed</p>
              <p className="font-bold">25</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-r border-gray-500">
              <p className="text-5xl font-bold mr-4">23%</p>
            </div>
            <div className="text-left ml-4">
              <p className="text-sm">Evolution</p>
              <p className="text-sm font-bold">since last week</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-200 border rounded-lg h-72 xl:col-span-2"></div>
        <div className="bg-gray-700 rounded-lg h-72 relative bg-gray-500">
          <img
            src={ServiceBackroundImage}
            alt=""
            className="h-full w-full object-cover  rounded-lg blur-sm opacity-90"
          />
          <Link
            to="services/reservations"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg absolute bottom-10 left-10 hover:scale-125"
          >
            reservations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBord;

import React from "react";
import Chart from "chart.js/auto";

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const DashBord = () => {
  return (
    <div className="w-full px-4">
      <h2 className="text-xl py-6">Statistic</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="p-6 bg-yellow-200 rounded-lg h-64">
          <p className="font-bold">App trafic</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg h-64"></div>
        <div className="p-6 bg-gray-300 rounded-lg h-64">
          <p className="font-bold">Most reseved</p>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg h-64"></div>
        <div className="p-6 bg-gray-100 border border-gray-400 rounded-lg h-64"></div>
        <div className="p-6 bg-gray-100 rounded-lg h-64">
          <p className="font-bold">Client churn rate</p>
        </div>
      </div>
    </div>
  );
};

export default DashBord;

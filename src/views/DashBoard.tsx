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

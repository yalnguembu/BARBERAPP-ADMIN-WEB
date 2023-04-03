import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-yellow-100">
      <div className="text-center font-bold">
        <h2 className="text-xl py-6">Oups!</h2>
        <h2 className="text-8xl py-6">404</h2>
        <h2 className="text-xl py-6">Page not found!</h2>
        <button className="px-4 py-2 bg-black text-white">Back to home</button>
      </div>
    </div>
  );
};

export default NotFound;

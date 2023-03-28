import React from "react";
import { Outlet } from "react-router-dom";
import Router from "./router";
import { configApi } from "./utils/api";

function App() {
  configApi();
  

  return (
    <div className="w-full h-full">
      <Router />
      <Outlet />
    </div>
  );
}

export default App;

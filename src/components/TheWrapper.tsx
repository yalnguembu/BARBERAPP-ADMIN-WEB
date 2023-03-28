import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DefaultService } from "../services";
import TheAsideMenu from "./TheAsideMenu";

const TheWrapper = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    DefaultService.verifyToken({ requestBody: { accessToken } }).catch(
      (error) => {
        window.location.href = "/auth/login";
      }
    );
  }, []);
  return (
    <div className="w-screen h-screen flex flex-row">
      <aside className="aside w-auto">
        <TheAsideMenu />
      </aside>
      <main className="w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default TheWrapper;

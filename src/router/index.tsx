import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import DashBord from "../views/DashBoard";
import OnBoarding from "../views/authentication/OnBoarding";
import LogIn from "../views/authentication/LogIn";
import SignUp from "../views/authentication/SignUp";
import TheWrapper from "../components/TheWrapper";
import Reservations from "../views/services/Reservations";
import Services from "../views/services/Services";
import NotFound from "../views/NotFound";
import ServiceDetails from "../views/services/ServiceDetails";
import UpdateService from "../views/services/UpdateService";
import NewService from "../views/services/NewService";
import Users from "../views/services/Users";
import ReservationDetails from "../views/services/ReservationDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TheWrapper />}>
          <Route index element={<DashBord />} />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="new" element={<NewService />} />
            <Route path=":id" element={<ServiceDetails />} />
            <Route path=":id/edit" element={<UpdateService />} />
            <Route path="reservations" element={<Reservations />}>
              <Route path=":id" element={<ReservationDetails />} />
            </Route>
          </Route>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/auth">
          <Route index element={<OnBoarding />} />
          <Route path="login" element={<LogIn />} />
          <Route path="sing-up" element={<SignUp />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

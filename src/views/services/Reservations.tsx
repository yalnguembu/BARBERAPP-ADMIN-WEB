import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ReservationItem from "../../components/reservations/ReservationItem";
import { Reservation } from "../../domains";
import { ReservationDTO, ReservationsService } from "../../services";
import { Link } from "react-router-dom";

const Reservations = () => {
  const [reservations, setReservations] = useState<ReservationDTO[]>();

  useEffect(() => {
    ReservationsService.getAll()
      .then((reservations) => {
        setReservations(reservations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-15rem)]">
        <NavBar create />
      </div>
      <div className="p-8 pt-32">
        <div className="bg-white p-4 rounded-lg">
          <table className="w-full text-left">
            <thead className="text-gray-500 font-600 border-b">
              <tr>
                <th className="p-4">#ID</th>
                <th className="p-4">Client</th>
                <th className="p-4">Service</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody className="w-full min-w-full">
              {reservations?.map((reservation, index) => (
                <ReservationItem
                  reservation={new Reservation(reservation)}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reservations;

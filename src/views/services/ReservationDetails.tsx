import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Reservation } from "../../domains";
import { ReservationService } from "../../services";
import { date } from "../../utils/common";

const serverURL = import.meta.env.VITE_API_URL;

const ReservationDetails = () => {
  const [reservation, setReservation] = useState<Reservation>();
  const { id } = useParams();
  const [isDeletemodalVisible, setIsDeletemodalVisible] = useState(false);
  const navigate = useNavigate();

  const deleteService = async () => {
    try {
      //   await ServiceService.deleteById({ id: id as string });
      navigate("/services");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleIsDeletemodalVisible = () =>
    setIsDeletemodalVisible(!isDeletemodalVisible);

  useEffect(() => {
    if (id)
      ReservationService.getReservationById({ id })
        .then((reservation) => {
          setReservation(new Reservation(reservation));
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[#e1e1e170] flex items-center justify-center">
      <div className="w-1/2 xl:1/3">
        <div className="flex w-full justify-end">
          <Link
            to="/services/reservations"
            className="hover:text-blue-400 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
        <div className="p-6 px-12">
          <div className="shadow bg-white p-6 rounded">
            <div className="flex justify-between items-center">
              <h3 className="text-lg">#{reservation?.id}</h3>
              {reservation?.isCanceled ? (
                <div
                  className="px-2 rounded-lg mb-4 border text-red-400 border-red-400"
                  onClick={toggleIsDeletemodalVisible}
                >
                  <span>canceled</span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-4 flex text-gray-500">
              <p>{date().toLocalDateString(reservation?.date ?? "")}</p>
              <p className="mx-2">-</p>
              <p>{reservation?.time}</p>
            </div>
            <h4 className="mt-4 text-lg text-gray-500">Client informartions</h4>
            <div className="border-t">
              <p className="text-black py-1">Name</p>
              <p className="text-gray-500">{reservation?.clientName}</p>
              <p className="text-black py-1">Email</p>
              <p className="text-gray-500">{reservation?.clientEmail}</p>
            </div>
            <h4 className="mt-4 text-lg text-gray-500">
              Service informartions
            </h4>
            <div className="border-t py-3">
              <p className="text-black py-2">Name</p>
              <p className="text-gray-500">{reservation?.serviceName}</p>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="text-black py-2">Duration</p>
                  <p className="text-gray-500">{reservation?.serviceDuration}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-black py-2">Price</p>
                  <p className="text-gray-500">{reservation?.servicePrice}</p>
                </div>
              </div>
            </div>
            <div className="border-t py-3 flex justify-end">
              {!reservation?.isCanceled ? (
                <button
                  className="p-2 px-4 bg-gray-800 text-white rounded-lg mb-4 border hover:bg-red-400"
                  onClick={toggleIsDeletemodalVisible}
                >
                  <span>Cancel reservation</span>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      {isDeletemodalVisible ? (
        <div className="absolute bottom-10 right-10 shadow-xl rounded p-4 bg-white">
          <p className="font-bold text-lg mb-2">
            Do you really want to cancel this reservation?
          </p>
          <div className="w-full flex justify-end">
            <button
              className="bg-gray-200 text-black rounded px-4 py-2 mr-4"
              onClick={toggleIsDeletemodalVisible}
            >
              no
            </button>
            <button
              className="bg-red-400 text-white rounded px-4 py-2"
              onClick={deleteService}
            >
              yes cancel
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReservationDetails;

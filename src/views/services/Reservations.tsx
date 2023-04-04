import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/form/SearchBar";
import NavBar from "../../components/NavBar";
import ReservationItem from "../../components/reservations/ReservationItem";
import { Reservation } from "../../domains";
import { ReservationDTO, ReservationsService } from "../../services";
import { Target } from "../../utils/type";

const Reservations = () => {
  const [reservations, setReservations] = useState<ReservationDTO[]>([]);
  const [archivedReservations, setArchivedReservations] = useState<
    ReservationDTO[]
  >([]);
  const [filteredReservations, setFilteredReservations] = useState<
    ReservationDTO[]
  >([]);
  const [isArchivedVisible, setisArchivedVisible] = useState<Boolean>(false);

  const [isReservationLoading, setIsReservationLoading] =
    useState<boolean>(true);
  const [isArchivedReservationLoading, setIsArchivedReservationLoading] =
    useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [searchArchived, setSearchArchived] = useState<string>("");

  const handelSearch = useCallback(({ target: { value } }: Target) => {
    setSearch(value);
    setTimeout(() => setReservations(filter(value, reservations)), 500);
  }, []);

  const handelSearchArchived = useCallback(({ target: { value } }: Target) => {
    setSearchArchived(value);
    setTimeout(
      () => setArchivedReservations(filter(value, archivedReservations)),
      500
    );
  }, []);

  const filter = (keyWord: string, datas: ReservationDTO[]) => {
    keyWord = keyWord.toLowerCase();
    return datas?.filter(
      (reservation: ReservationDTO) =>
        reservation.service?.name?.toLowerCase().search(keyWord) !== -1 ||
        reservation.client?.username?.toLowerCase().search(keyWord) !== -1 ||
        reservation._id?.toLowerCase().search(keyWord) !== -1
    );
  };

  const toggleisArchivedVisible = () =>
    setisArchivedVisible(!isArchivedVisible);

  const fetchArchivedReservations = () => {
    ReservationsService.getArchived()
      .then((reservations) => {
        setIsArchivedReservationLoading(false);
        setArchivedReservations(reservations);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ReservationsService.getAll()
      .then((reservations) => {
        setIsReservationLoading(false);
        setReservations(reservations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-15rem)]">
        <NavBar />
      </div>
      <div className="p-8 pt-32">
        <div>
          <button
            className="w-full flex flex-row justify-between items-center border-b border-gray-300 pb-2 mb-8"
            onClick={() => {
              toggleisArchivedVisible();
              fetchArchivedReservations();
            }}
          >
            <span className="font-bold text-gray-500 text-xl">
              Archived reservations
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 stroke-gray-500 ${
                isArchivedVisible && "rotate-180"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {isArchivedVisible ? (
          <div>
            {isArchivedReservationLoading ? (
              <div className="w-full h-96 flex items-center justify-center">
                <p className="font-bold text-gray-600">Loading...</p>
              </div>
            ) : archivedReservations.length ? (
              <div className="bg-white p-4 rounded-lg">
                <div className="p-4 flex items-center justify-between border-b">
                  <h3 className="text-xl text-gray-500">
                    <span className="font-bold text-black">
                      {archivedReservations?.length}
                    </span>
                    archived reservations in total
                  </h3>
                  <div className="w-58">
                    <SearchBar
                      handelChange={handelSearchArchived}
                      value={searchArchived}
                      placeholder="Serach reservation..."
                    />
                  </div>
                </div>
                <table className="w-full text-left">
                  <thead className="text-gray-500 font-600 border-b">
                    <tr>
                      <th className="p-4">#ID</th>
                      <th className="p-4">Client</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="w-full min-w-full">
                    {filteredReservations?.length
                      ? filteredReservations?.map((reservation, index) => (
                          <ReservationItem
                            reservation={new Reservation(reservation)}
                            key={index}
                          />
                        ))
                      : archivedReservations?.map((reservation, index) => (
                          <ReservationItem
                            reservation={new Reservation(reservation)}
                            key={index}
                          />
                        ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="w-full h-[500px] flex flex-row justify-center items-center">
                <p className="font-bold text-gray-600">
                  It seem like there is no archived reservations
                </p>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}

        <div className="w-full flex flex-row justify-between items-center border-b border-gray-300 pb-2 my-8">
          <span className="font-bold text-gray-500 text-xl">
            In comming reservations
          </span>
        </div>
        {isReservationLoading ? (
          <div className="w-full h-96 flex items-center justify-center">
            <p className="font-bold text-gray-600">Loading...</p>
          </div>
        ) : reservations.length ? (
          <div className="bg-white p-4 rounded-lg">
            <div className="p-4 flex items-center justify-between border-b">
              <h3 className="text-xl text-gray-500">
                <span className="font-bold text-black">
                  {reservations?.length}{" "}
                </span>
                reservations in total
              </h3>
              <div className="w-58">
                <SearchBar
                  handelChange={handelSearch}
                  value={search}
                  placeholder="Serach reservation..."
                />
              </div>
            </div>
            <table className="w-full text-left">
              <thead className="text-gray-500 font-600 border-b">
                <tr>
                  <th className="p-4">#ID</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="w-full min-w-full">
                {filteredReservations?.length
                  ? filteredReservations?.map((reservation, index) => (
                      <ReservationItem
                        reservation={new Reservation(reservation)}
                        key={index}
                      />
                    ))
                  : reservations?.map((reservation, index) => (
                      <ReservationItem
                        reservation={new Reservation(reservation)}
                        key={index}
                      />
                    ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full h-[350px] flex flex-row justify-center items-center">
            <p className="font-bold text-gray-600">
              It seem like there is no in comming reservations
            </p>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Reservations;

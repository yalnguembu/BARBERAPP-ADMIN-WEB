import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../components/form/SearchBar";
import NavBar from "../../components/NavBar";
import ReservationItem from "../../components/reservations/ReservationItem";
import { Reservation } from "../../domains";
import { ReservationDTO, ReservationsService } from "../../services";
import { Target } from "../../utils/type";

const Reservations = () => {
  const [reservations, setReservations] = useState<ReservationDTO[]>([]);
  const [filteredReservations, setFilteredReservations] = useState<
    ReservationDTO[]
  >([]);

  const [search, setSearch] = useState<string>("");

  const handelSearch = useCallback(({ target: { value } }: Target) => {
    setSearch(value);
    setTimeout(() => filter(value), 500);
    if ([...reservations].length) console.log("pufff");
  }, []);

  const filter = (keyWord: string) => {
    keyWord = keyWord.toLowerCase();
    setFilteredReservations(
      reservations?.filter(
        (reservation: ReservationDTO) =>
          reservation.client?.username?.toLowerCase().search(keyWord) !== -1 ||
          reservation.client?.email?.toLowerCase().search(keyWord) !== -1 ||
          reservation._id?.toLowerCase().search(keyWord) !== -1 ||
          reservation.date?.toLowerCase().search(keyWord) !== -1
      )
    );
  };

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
        <NavBar />
      </div>
      <div className="p-8 pt-32">
        {reservations.length && (
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
        )}
      </div>
    </div>
  );
};

export default Reservations;

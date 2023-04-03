import { Reservation } from "../../domains";
import { date } from "../../utils/common";
import { useNavigate } from "react-router-dom";
const ReservationItem = ({ reservation }: { reservation: Reservation }) => {
  const navigate = useNavigate();
  return (
    <tr
      className="hover:bg-gray-100 cursor-pointer"
      onClick={() => navigate(`${reservation.id}`)}
    >
      <td className="p-4">{reservation.id.substring(4, 19).toUpperCase()}</td>
      <td className="p-4">{reservation.clientName}</td>
      <td className="font-bold p-4">{reservation.serviceName}</td>
      <td className="p-4">
        {date().toLocalDateString(reservation.date ?? "")}
      </td>
      <td className="p-4">
        {reservation.isCanceled ? (
          <div className="px-2 rounded-full text-red-500 border border-red-500 inline-block bg-red-100">
            canceled
          </div>
        ) : (
          <div className="px-2 rounded-full text-green-500 border border-green-500 inline-block bg-green-100">
            accepted
          </div>
        )}
      </td>
    </tr>
  );
};

export default ReservationItem;

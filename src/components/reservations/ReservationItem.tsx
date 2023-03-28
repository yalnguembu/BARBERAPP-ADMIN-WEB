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
      <td className="p-4">{reservation.id.substring(0, 12).toUpperCase()}</td>
      <td className="p-4">{reservation.clientName}</td>
      <td className="font-bold p-4">{reservation.serviceName}</td>
      <td className="p-4">
        {date().toLocalDateString(reservation.date ?? "")}
      </td>
    </tr>
  );
};

export default ReservationItem;

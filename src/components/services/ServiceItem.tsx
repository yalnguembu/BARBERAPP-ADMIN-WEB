import { Link } from "react-router-dom";
import { Service } from "../../domains";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

type ServiceItemProps = {
  service: Service;
};
const ServiceItem = ({ service }: ServiceItemProps) => {
  const serverURL = import.meta.env.VITE_API_URL;
  return (
    <Link className="block" to={`${service.id}`}>
      <div className="w-full p-2 rounded-lg bg-white flex justify-between items-center">
        <div className="w-40 h-24 rounded bg-gray-100">
          <img
            src={serverURL + "/storage/images/services/" + service.picture}
            alt=""
            className="object-cover h-24 w-full rounded bg-gray-100"
          />
        </div>

        <div className="w-full px-3">
          <div>
            <span className="rounded-full px-3 bg-yellow-300 tex-sm">
              {service.category}
            </span>
          </div>
          <p className="font-bold text-lg">{service.name}</p>
          <p className="font-bold text-md text-gray-500">{service.price} xaf</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;

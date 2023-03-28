import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Service, nullService } from "../../domains";
import { ServiceService } from "../../services";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";

const serverURL = import.meta.env.VITE_API_URL;

const ServiceDetails = () => {
  const [service, setService] = useState<Service>(nullService);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      ServiceService.getById({ id })
        .then((service) => {
          setService(new Service(service));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-15rem)]">
        <NavBar create />
      </div>
      <div className="p-8 pt-28">
        <div className="flex w-full justify-between">
          <h3 className="text-lg">
            <Link to="/services" className="hover:text-blue-400 mr-4">
              <ArrowBackIcon />
            </Link>
            Deatils
          </h3>
          <div>
            <Link
              to="edit"
              className="p-2 px-4 border-gray-300 rounded-lg mb-4 border hover:text-blue-400 hover:border-blue-400 "
            >
              <span>Edit</span>
            </Link>
            <button className="p-2 px-4 border-gray-300 rounded-lg mb-4 border hover:text-red-400 hover:border-red-400 ml-4">
              <span>Delete</span>
            </button>
          </div>
        </div>
        <div className="shadow bg-white p-6 flex rounded">
          <img
            src={serverURL + "/storage/images/services/" + service.picture}
            alt=""
            className="w-2/5 rounded bg-gray-100"
          />
          <div className="px-6">
            <div className="w-full px-3">
              <p className="font-bold text-2xl">{service.name}</p>
              <p className="font-bold text-3xl my-4 text-gray-500">
                {service.price} xaf
              </p>
              <div>
                <span className="rounded-full px-3 bg-yellow-300 tex-sm">
                  {service.category}
                </span>
              </div>
              <p className="text-lg mt-4">{service.duration} min</p>
              <p className="text-lg mt-4 text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ServiceItem from "../../components/services/ServiceItem";
import { Service } from "../../domains";
import { ServicesService } from "../../services";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    ServicesService.getAll()
      .then((services) => {
        setServices(services);
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
      <div className="p-4 pt-24">
        <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceItem key={index} service={new Service(service)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

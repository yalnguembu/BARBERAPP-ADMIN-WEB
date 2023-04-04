import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../../components/form/SearchBar";
import NavBar from "../../components/NavBar";
import ServiceItem from "../../components/services/ServiceItem";
import { Service } from "../../domains";
import { ServiceDTO, ServicesService } from "../../services";
import { Target } from "../../utils/type";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [filteredServices, setFilteredServices] = useState<ServiceDTO[]>([]);

  const filter = (keyWord: string, datas: ServiceDTO[]) => {
    keyWord = keyWord.toLowerCase();
    return datas?.filter(
      (datas: ServiceDTO) =>
        datas?.name?.toLowerCase().search(keyWord) !== -1 ||
        datas.category?.toLowerCase().search(keyWord) !== -1
    );
  };
  const handelSearch = useCallback(({ target: { value } }: Target) => {
    setSearch(value);
    setTimeout(() => setFilteredServices(filter(value, services)), 500);
  }, []);

  useEffect(() => {
    ServicesService.getAll()
      .then((services) => {
        setIsLoading(false)
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
        {isLoading ? (
          <div className="w-full h-96 flex items-center justify-center">
            <p className="font-bold text-gray-600">Services are loading...</p>
          </div>
        ) : services.length ? (
          <div>
            <div className="w-3/5 mx-auto my-4 mt-8 bg-white rounded-lg shadow-lg">
              <SearchBar
                handelChange={handelSearch}
                value={search}
                placeholder="Serach services..."
              />
            </div>
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 xl:grid-cols-3">
              {filteredServices.length
                ? filteredServices.map((service, index) => (
                    <ServiceItem key={index} service={new Service(service)} />
                  ))
                : services.map((service, index) => (
                    <ServiceItem key={index} service={new Service(service)} />
                  ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
            <h4 className="font-bold text-gray-500">
              It seem like there are no services. try to create one
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

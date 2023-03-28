import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { DefaultService } from "../../services";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import TextField from "../../components/form/TexTField";
import SubmitButton from "../../components/form/SubmitButton";
import { Target } from "../../utils/type";
import TextArea from "../../components/form/TextArea";

const serverURL = import.meta.env.VITE_API_URL;

const NewService = () => {
const navigate = useNavigate()

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const handelName = useCallback(({ target: { value } }: Target) => {
    setName(value);
  }, []);
  const handelPrice = useCallback(({ target: { value } }: Target) => {
    setPrice(parseInt(value));
  }, []);
  const handelDuration = useCallback(({ target: { value } }: Target) => {
    setDuration(parseInt(value));
  }, []);
  const handelCategory = useCallback(({ target: { value } }: Target) => {
    setCategory(value);
  }, []);
  const handelDescription = useCallback(({ target: { value } }: Target) => {
    setDescription(value);
  }, []);

  const create = () => {
    DefaultService.postService({
      requestBody: { name, duration, price, category, description, picture },
    })
      .then((service) => {
        navigate("/services")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-15rem)]">
        <NavBar />
      </div>
      <div className="p-8 pt-28">
        <div className="flex w-full justify-between">
          <h3 className="text-lg">
            <Link to="/services" className="hover:text-blue-400 mr-4">
              <ArrowBackIcon />
            </Link>
            New service
          </h3>
          <div className="mb-4">
            <SubmitButton title="Create" type="submit" onPress={create} />
          </div>
        </div>
        <div className="shadow bg-white p-6 flex rounded pt-8">
          <div className="w-1/2 rounded bg-gray-100"></div>
          <div className="px-6">
            <div className="w-full px-3 grid grid-cols-2 gap-4 gap-y-8">
              <TextField
                inputType="text"
                placeholder="Enter name"
                value={name}
                handelChange={handelName}
              />
              <TextField
                inputType="text"
                placeholder="Enter price"
                value={price}
                handelChange={handelPrice}
              />
              <TextField
                inputType="text"
                placeholder="Enter duration"
                value={duration}
                handelChange={handelDuration}
              />
              <TextField
                inputType="text"
                placeholder="Enter category"
                value={category}
                handelChange={handelCategory}
              />
              <div className="col-span-2">
                <TextArea
                  placeholder="Enter description"
                  value={description}
                  handelChange={handelDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewService;

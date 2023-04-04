import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { DefaultService } from "../../services";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import TextField from "../../components/form/TexTField";
import SubmitButton from "../../components/form/SubmitButton";
import { Target, FileTarget } from "../../utils/type";
import TextArea from "../../components/form/TextArea";
import SelectBox from "../../components/form/SelectBox";
import ImageUploader from "../../components/form/ImageUploader";

const serverURL = import.meta.env.VITE_API_URL;

const NewService = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState<File | undefined | string>("");
  const [price, setPrice] = useState<number>(0);
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handelPicture = useCallback(({ target: { files } }: FileTarget) => {
    setPicture(files?.length ? files[0] : undefined);
  }, []);
  const handelName = useCallback(({ target: { value } }: Target) => {
    setName(value as string);
  }, []);
  const handelPrice = useCallback(({ target: { value } }: Target) => {
    setPrice(parseInt(value as string));
  }, []);
  const handelDuration = useCallback(({ target: { value } }: Target) => {
    setDuration(parseInt(value as string));
  }, []);
  const handelCategory = useCallback(({ target: { value } }: Target) => {
    setCategory(value as string);
  }, []);
  const handelDescription = useCallback(({ target: { value } }: Target) => {
    setDescription(value as string);
  }, []);

  const create = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    DefaultService.create({
      formData: {
        name,
        duration,
        price,
        category,
        description,
        picture: picture as Blob,
      },
    })
      .then((service: any) => {
        navigate("/services");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-15rem)]">
        <NavBar />
      </div>
      <div className="p-8 pt-28">
        <form encType="multipart/form-data">
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
            <div className="w-2/5 rounded">
              <TextField
                label="Name"
                inputType="text"
                placeholder="Enter name"
                value={name}
                handelChange={handelName}
              />
              <br />
              <ImageUploader
                label="Service Picture"
                value={picture}
                handelChange={handelPicture}
              />
            </div>
            <div className="px-6 w-3/5">
              <div className="w-full px-3 grid grid-cols-2 gap-4 gap-y-8">
                <div className="col-span-2">
                  <SelectBox
                    options={[
                      "hair style",
                      "facial care",
                      "body care",
                      "hair traitement",
                    ]}
                    label="Category"
                    placeholder="Select category"
                    value={category}
                    handelChange={handelCategory}
                  />
                </div>
                <TextField
                  label="Price"
                  inputType="number"
                  placeholder="Enter price"
                  value={price}
                  handelChange={handelPrice}
                />
                <TextField
                  label="Duration"
                  inputType="number"
                  placeholder="Enter duration"
                  value={duration}
                  handelChange={handelDuration}
                />
                <div className="col-span-2">
                  <TextArea
                    label="Description"
                    placeholder="Enter description"
                    value={description}
                    handelChange={handelDescription}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewService;

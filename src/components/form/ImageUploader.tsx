import React, { Component } from "react";
import axios from "axios";
import { Target, FileTarget } from "../../utils/type";

interface TextFieldProps {
  error?: string;
  handelChange: (event: FileTarget) => any;
  value: any;
  label?: string;
}

const ImageUploader = ({
  error,
  value,
  handelChange,
  label,
}: TextFieldProps) => {
  return (
    <div>
      {label && <label className="font-bold text-gray-700">{label}</label>}
      <label htmlFor="image">
        <div className="border-dashed border-2 rounded-lg w-full min-h-[260px] flex flex-col items-center justify-center p-4 mt-4">
          {value ? (
            <img src={URL.createObjectURL(value)} />
          ) : (
            <>
              <span className="text-gray-500">
                Selected image will appear here
              </span>
              <label
                htmlFor="image"
                className="bg-blue-500 px-3 py-1 text-center text-white inline-block mt-4 rounded-lg cursor-pointer hover:bg-blue-400"
              >
                Select an image
              </label>
            </>
          )}
        </div>
      </label>

      <input type="file" hidden value={""} onChange={handelChange} id="image" />
      {error ? <p className="text-red-500 text-sm">{error}</p> : <></>}
    </div>
  );
};

export default ImageUploader;

import { Target } from "../../utils/type";

const SelectBox = ({
  error,
  placeholder,
  value,
  handelChange,
  label,
  options,
}: SelectBoxProps) => {
  return (
    <div>
      {label && <label className="font-bold text-gray-700">{label}</label>}
      <select
        value={value}
        onChange={handelChange}
        className="border rounded-lg px-5 p-3 w-full outline-blue-400 bg-transparent mt-4"
      >
        <option hidden>{placeholder}</option>
        {options.length
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : ""}
      </select>
      {error ? <p className="text-red-500 text-sm">{error}</p> : <></>}
    </div>
  );
};
interface SelectBoxProps {
  error?: string;
  placeholder?: string;
  handelChange: (event: Target) => any;
  value: any;
  label?: string;
  options: string[];
}
export default SelectBox;

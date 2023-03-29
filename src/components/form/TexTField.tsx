import { Target } from "../../utils/type";

const TextField = ({
  inputType,
  error,
  placeholder,
  value,
  handelChange,
  label,
}: TextFieldProps) => {
  return (
    <div>
      {label && <label className="font-bold text-gray-700">{label}</label>}
      <input
        type={inputType}
        className="border rounded-lg px-5 p-3 w-full outline-blue-400 mt-4"
        placeholder={placeholder}
        value={(inputType = "number" && !Number.isNaN(value) ? value : 0)}
        onChange={handelChange}
      />
      {error ? <p className="text-red-500 text-sm">{error}</p> : <></>}
    </div>
  );
};
interface TextFieldProps {
  inputType: string;
  error?: string;
  placeholder?: string;
  handelChange: (event: Target) => any;
  value: any;
  label?: string;
}
export default TextField;

import { Target } from "../../utils/type";

const TextArea = ({
  error,
  placeholder,
  value,
  handelChange,
  label,
}: TextFieldProps) => {
  return (
    <div>
      {label && <label className="font-bold text-gray-700">{label}</label>}
      <textarea
        className="border rounded-lg px-5 p-3 w-full outline-blue-400 h-32 mt-4"
        placeholder={placeholder}
        value={value}
        onChange={handelChange}
      />

      {error ? <p className="text-red-500 text-sm">{error}</p> : <></>}
    </div>
  );
};
interface TextFieldProps {
  error?: string;
  placeholder?: string;
  handelChange: (event: Target) => any;
  value: any;
  label?: string;
}
export default TextArea;

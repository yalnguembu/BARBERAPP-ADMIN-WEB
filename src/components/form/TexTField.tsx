import { Target } from "../../utils/type";

const TextField = ({
  inputType,
  error,
  placeholder,
  value,
  handelChange,
}: TextFieldProps) => {
  return (
    <div>
      <input
        type={inputType}
        className="border rounded-lg px-5 p-3 w-full outline-blue-400"
        placeholder={placeholder}
        value={value}
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
}
export default TextField;

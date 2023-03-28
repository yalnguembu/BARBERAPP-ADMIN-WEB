const SubmitButton = ({ title, onPress, type }: SubmitButtonProps) => {
  return (
    <div>
      <button
        onClick={onPress}
        title={title}
        className="border rounded-lg bg-amber-400 px-5 py-3 text-[#222] w-full hover:bg-yellow-400"
      >
        {title}
      </button>
    </div>
  );
};
type SubmitButtonProps = {
  title: string;
  onPress?: (event: any) => any;
  type?: string;
};
export default SubmitButton;

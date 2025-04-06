import { HTMLInputTypeAttribute } from "react";

type FormFieldProps = {
  label: string;
  placeHolder: string;
  type: HTMLInputTypeAttribute;
};
const FormField = ({ label, placeHolder, type }: FormFieldProps) => {
  return (
    <div className="w-full flex flex-col gap-1 my-2">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className="bg-gray-700 border border-gray-500 outline-none  rounded-full w-full p-3"
        required={true}
      />
    </div>
  );
};

export default FormField;

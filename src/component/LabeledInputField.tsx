
import React from "react";

interface Props {
  label: string; 
  name: string; 
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const LabeledInputField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  placeholder= 'Type Here',
  value,
  onChange = ()=>{},
}) => {
  return (
    <div className="mb-4 bg-black">
      <label
        htmlFor={name}
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default LabeledInputField;

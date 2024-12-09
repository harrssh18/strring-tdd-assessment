import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean
  value?: string;
  onChange?: (v: string) => void;
}

const LabeledInputField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  placeholder = "Type Here",
  autoFocus=false,
  value,
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
};

export default LabeledInputField;

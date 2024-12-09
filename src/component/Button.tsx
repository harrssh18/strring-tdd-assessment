import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Explicitly define button types
  children?: ReactNode;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, className, children, type = "submit" } = props;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "p-2 bg-blue-500 hover:bg-blue-800 text-white rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

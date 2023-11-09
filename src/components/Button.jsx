import { ReactNode } from "react";

interface ButtonProps {
  children: String;
  // Below way we are able to fix the acceptable parameters of an attribute.
  color?: "primary" | "dark" | "secondary" | "info" | "light";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "dark" }: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        class={"btn btn-" + color + " alert-dismissible"}
        onClick={onClick}
        data-bs-dismiss="alert"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

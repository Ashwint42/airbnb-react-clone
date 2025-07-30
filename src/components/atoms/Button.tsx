import type { ButtonProps } from "../../types/atoms";

const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;

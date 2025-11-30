import React, { type ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  additionalClassName?: string;
}

const Button: React.FC<IProps> = ({
  children,
  className,
  additionalClassName,
  ...rest
}) => {
  return (
    <button
      className={
        className
          ? className
          : `bg-fuchsia-300 px-3 py-1 rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 text-lg ${additionalClassName}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

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
          : `bg-fuchsia-950/70 text-white px-3 py-1 capitalize rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 text-lg ${additionalClassName}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

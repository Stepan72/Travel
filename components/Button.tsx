import Image from "next/image";
import React from "react";

interface ButtonProps {
  title: string;
  type: "button" | "reset" | "submit";
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ title, type, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter h-12 gap-3  rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;

import Image from "next/image";
import React from "react";

interface ButtonProps {
  title: string;
  type: "button" | "reset" | "submit";
  icon?: string;
  variant: "btn_dark_green" | "btn_green" | "btn_white_text";
}

const Button = ({ title, type, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;

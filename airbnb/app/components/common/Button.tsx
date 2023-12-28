"use client";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full transition rounded-lg disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80
      ${outline ? "bg-white" : "bg-rose-500"}
      ${outline ? "border-black" : "border-rose-500"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border" : "border-[2px]"}
      `}
    >
      {Icon ? <Icon size={24} className="absolute left-4 top-3" /> : null}
      {label}
    </button>
  );
};

export default Button;

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../common/Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3  px-4 rounded-full cursor-pointer hover:bg-neutral-100">
          Airbnb Your Home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border border-neutral-200 rounded-full cursor-pointer gap-3 transition hover:shadow-md flex items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white right-0 top-12 text-sm overflow-hidden">
          <div className="flex flex-col cursor-pointer">
            <MenuItem label={"Login"} onClick={() => alert("Login")} />
            <MenuItem label={"Sign Up"} onClick={() => alert("Sign Up")} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;

"use client";
import React from "react";
import Container from "../common/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full shadow-sm py-4 border-b-[1px]">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

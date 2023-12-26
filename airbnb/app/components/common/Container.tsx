"use client";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-20 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;

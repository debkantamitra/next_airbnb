import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      width={100}
      height={100}
      src={"/images/airbnb_logo.png"}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;

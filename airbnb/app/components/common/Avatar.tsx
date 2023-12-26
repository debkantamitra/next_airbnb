import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src={"/images/avatar.png"}
      width={30}
      height={30}
      alt="Avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;

import React from "react";

interface Props {
  title: string;
  subTitle?: string;
  center?: boolean;
}

const Heading = ({ title, subTitle, center }: Props) => {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-2xl font-bold">{title}</div>
      <p className="font-light text-neutral-500 mt-2 ">{subTitle}</p>
    </div>
  );
};

export default Heading;

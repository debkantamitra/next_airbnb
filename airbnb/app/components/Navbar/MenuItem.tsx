import React from "react";

interface Props {
  onClick: () => void;
  label: string;
}
const MenuItem = ({ onClick, label }) => {
  return (
    <div
      className="py-3 px-4 hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;

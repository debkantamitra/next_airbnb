import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border w-full py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer transition md:w-auto">
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="text-sm font-semibold px-6 border-x-[1px] flex-1 hidden sm:block">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
export default function InputArea({ handleinput }) {
  const inputRef = useRef(null);

  return (
    <div className="container max-w-2xl mx-auto my-10">
      <div className="rounded-xl transition-all  focus-within:shadow-[0px_10px_20px_rgba(130,0,0,0.5)] ">
        <div className="rounded-xl border-primary flex items-center  border-4 relative pr-9 shadow-[0px_6px_0px_rgb(130,0,0)] transition-all focus-within:-translate-y-1">
          <input
            type="search"
            name="Search"
            id="Search"
            ref={inputRef}
            placeholder="Search Anime Or Mangas"
            className="w-full rounded-full border-none outline-none py-2 text-right dark:bg-black group placeholder:italic"
            onChange={(e) => {
              handleinput(inputRef.current.value);
            }}
          />
          <span className="absolute right-0 mr-3 text-primary text-lg block">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
}

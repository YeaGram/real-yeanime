import Head from "next/head";
import Footers from "../components/footer";
import InputArea from "../components/input";
import NavigationBar from "../components/navbar";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Card from "../components/card";
import LoadingState from "../components/loading";

export default function Search() {
  const [searchQuery, SetSearchQuery] = useState(false);
  const [noInput, setNoInput] = useState(false);
  const [animes, setAnimes] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNoInput = () => {
    setLoading(true);
    setNoInput(searchQuery == "" ? false : true);
    setLoading(false);
  };

  const handleinput = (callback) => {
    const data = callback;
    SetSearchQuery(data);
  };

  const GetAnime = () => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAnimes(data);
      });
  };

  console.log(loading);

  return (
    <div className="">
      <Head>
        <title>Search</title>
      </Head>
      <NavigationBar />
      <div className="mt-32">
        <div className="relative w-fit mx-auto">
          <span className="text-2xl text-primary">
            <FaSearch className="absolute top-1/2 -translate-y-1/2 translate-x-4 right-0 rotate-90" />
          </span>
          <h2 className="font-poppins text-5xl font-bold relative tracking-wider text-center">
            Search
          </h2>
        </div>
        <div className="flex flex-col items-end max-w-2xl mx-auto ">
          <InputArea handleinput={handleinput} />
          <div
            onClick={searchQuery && noInput ? GetAnime : handleNoInput}
            className="px-7 py-1 ring-2 ring-primary w-fit focus-within:ring-offset-2 focus-within:bg-primary focus-within:text-inherit hover:bg-primary hover:border-none transition-all hover:text-inherit text-primary"
          >
            <button className=" text-center font-Poppins font-semibold ">
              Find
            </button>
          </div>
        </div>
      </div>
      <div className="container w-fit mx-auto my-10">
        {loading ? (
          <LoadingState />
        ) : noInput ? (
          animes && (
            <div>
              <h2 className="text-2xl font-poppins text-primary">
                {animes.data.length > 0 ? (
                  ""
                ) : (
                  <div>no data! Please check your input</div>
                )}
              </h2>
              <Card dataJson={animes.data} />
            </div>
          )
        ) : (
          <h2 className="text-2xl font-poppins text-primary">No Input!</h2>
        )}
      </div>
      <Footers />
    </div>
  );
}

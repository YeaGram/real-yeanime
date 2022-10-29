import NavItem from "../navbar/navitems";
import { useState, useEffect } from "react";
import { _GetTopAnimes } from "./getAnime";
import LoadingState from "../loading";

export default function GetTopAnime({ title, children, target, time }) {
  const [Loading, GetTopAnime] = _GetTopAnimes(3000, 5);

  if (Loading) return <LoadingState title="Top Anime" />;
  return (
    <li className="flex-1 block ">
      <div className="flex justify-between flex-col h-full">
        <div>
          <h3 className="font-SourceSans text-xl font-bold">Top Anime</h3>
          <div className="text-sm font-Poppins ml-2 mt-2">
            {GetTopAnime.map((anime, index) => {
              return (
                <NavItem
                  variants="fade"
                  key={anime.mal_id}
                  target={`/anime/${anime.mal_id}`}
                >
                  <div className="inline-block">{index + 1}.</div> {anime.title}
                </NavItem>
              );
            })}
          </div>
        </div>
        <div className="text-sm text-right">
          <NavItem variants="fill" target={`/`}>
            More..
          </NavItem>
        </div>
      </div>
    </li>
  );
}

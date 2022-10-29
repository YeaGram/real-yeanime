import NavItem from "../navbar/navitems";
import { useState, useEffect } from "react";
import { _GetTopMovieAnimes } from "./getAnime";
import LoadingState from "../loading";

export default function GetTopMovieAnime({ title, children, target, time }) {
  const [Loading, GetTopMovieAnime] = _GetTopMovieAnimes(9000);

  if (Loading) return <LoadingState title="Top Movie Anime" />;
  return (
    <li className="flex-1 block ">
      <div className="flex justify-between flex-col h-full">
        <div>
          <h3 className="font-SourceSans text-xl font-bold">Top Movie Anime</h3>
          <div className="text-sm font-Poppins ml-2 mt-2">
            {GetTopMovieAnime.map((anime, index) => {
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
          <NavItem variants="fill" target={target}>
            More..
          </NavItem>
        </div>
      </div>
    </li>
  );
}

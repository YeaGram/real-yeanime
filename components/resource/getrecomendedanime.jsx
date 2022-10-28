import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideMenu from "../sidemenu";
import { _GetTopAnimes } from "./getAnime";

export default function GetRecomendedAnime() {
  const [Loading, GetTopAnime] = _GetTopAnimes(0, 10);

  return (
    <>
      <div className="py-5 ml-5">
        <h1 className="font-Poppins text-5xl font-semibold">Recomended</h1>
      </div>
      <div className="overflow-x-scroll overflow-y-hidden grid grid-flow-col gap-4 w-full snap-x snap-mandatory">
        {GetTopAnime.map((items) => {
          return (
            <div
              key={items.mal_id}
              className="relative z-0 w-full h-[500px] snap-center aspect-[17/24] group"
            >
              <Image
                src={items.images.webp.large_image_url}
                alt={items.title}
                fill={true}
                sizes="100%"
                className="object-cover z-10"
              />
              <div className="absolute bottom-0 transition-all justify-center items-center flex z-20 w-full h-0 group-hover:h-full bg-gradient-to-t dark:from-black dark:to-black/40 from-white to-white/40 group">
                <Link href={items.url} target="_blank">
                  <div className="px-20 font-semibold font-SourceSans text-3xl opacity-0 group-hover:opacity-100">
                    <h3>{items.title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

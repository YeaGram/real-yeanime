import { _GetRandomAnimes } from "./getAnime";
import LoadingState from "../loading";
import Image from "next/image";
import NavItem from "../navbar/navitems";

export default function RandomAnime() {
  const [Loading, GetRandomAnime] = _GetRandomAnimes(21000);

  if (Loading) return <LoadingState />;

  return (
    GetRandomAnime && (
      <section className="my-20 max-w-7xl container mx-auto sm:px-14 ">
        <div className="mx-auto h-full relative bg-gradient-to-tr pt-5  from-primary/30 dark:via-black via-white/0 dark:border-2 border-primary/30">
          <div className="flex flex-col items-center sm:items-start sm:py-7 sm:px-10 gap-4 justify-center md:flex-row">
            {/* Images */}
            <div className="min-w-[250px]  flex-1 mx-auto max-w-sm relative aspect-[17/24] animate-[fadein_1s_ease]">
              <Image
                alt={GetRandomAnime.title}
                src={GetRandomAnime.images.webp.large_image_url}
                fill
                sizes="100vw"
                className="object-contain drop-shadow-lg transition-all"
              />
            </div>

            {/* Details */}
            <div className="flex-1 ml-4 flex flex-col justify-between mx-auto md:p-0 px-10">
              <div>
                <div className="py-7">
                  <h2 className="font-Poppins font-bold text-4xl text-center">
                    Random Anime
                  </h2>
                </div>
                <div className="font-SourceSans text-xl">
                  <h4 className="font-poppins font-bold text-xl">
                    {GetRandomAnime.title}
                  </h4>
                  <div className="my-3">
                    <p>
                      Score: {GetRandomAnime.score ? GetRandomAnime.score : "-"}
                    </p>
                    <p>Rating: {GetRandomAnime.rating}</p>
                  </div>
                  <div className="my-5">
                    <h5 className="opacity-70">Synopsis :</h5>
                    <div className="max-h-[250px] overflow-y-auto ">
                      <p className="block px-5">
                        {GetRandomAnime.synopsis
                          ? GetRandomAnime.synopsis
                          : "-"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right pb-7">
                  <NavItem target={`/anime/${GetRandomAnime.mal_id}`}>
                    Details
                  </NavItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

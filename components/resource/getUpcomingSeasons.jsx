import Image from "next/image";
import Card from "../card";
import LoadingState from "../loading";
import NavItem from "../navbar/navitems";
import { _GetTopUpcomingAnimes } from "./getAnime";

export default function GetUpcomingSeasonsAnime() {
  const [Loading, GetTopUpcomingAnime] = _GetTopUpcomingAnimes(15000);
  // if (Loading) return <LoadingState />;
  return (
    <section className="container mx-auto px-7 md:px-0 lg:px-7 mt-10">
      <div className="my-4 flex flex-col md:flex-row md:items-center container md:px-14 lg:px-0">
        <h2 className="font-Poppins font-bold text-4xl">Upcoming Seasons.</h2>
        <p className="text-primary italic font-SourceSans indent-2">
          upcoming animes base on next seasons
        </p>
      </div>
      <Card dataJson={GetTopUpcomingAnime} />
      <div className="text-center">more</div>
      {/* <div className="flex w-full justify-center flex-wrap xl:flex-nowrap gap-3">
        {GetTopUpcomingAnime.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 md:flex-none lg:flex-1 md:w-[200px] min-w-[150px] "
            >
              <NavItem>
                <div className="relative w-full aspect-[17/24]">
                  <Image
                    src={item.images.webp.image_url}
                    fill
                    sizes={"100vw"}
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              </NavItem>
              <p className="text-center block py-2 font-SourceSans text-lg font-semibold text-black/70 dark:text-white/50 hover:text-inherit">
                {item.title}
              </p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
}

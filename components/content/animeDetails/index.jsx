import Image from "next/image";
import LoadingState from "../../loading";
import { _GeAnimeDetails } from "../../resource/getAnime";
import Dproperty from "./property";
import NavItem from "../../navbar/navitems";
import Head from "next/head";
import SideMenu from "../../sidemenu";

export default function AnimeDetailContent({ animeid }) {
  const [Loading, GetAnimeDetails] = _GeAnimeDetails(0, animeid);
  console.log(animeid);
  if (Loading) return <LoadingState />;
  if (GetAnimeDetails === undefined)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        {" "}
        <h1>No Datas</h1>{" "}
      </div>
    );
  return (
    GetAnimeDetails && (
      <>
        <Head>
          <title>Yeanime : {GetAnimeDetails.title}</title>
        </Head>
        <section className="mt-20 max-w-screen-xl container mx-auto px-5 md:px-20">
          <main className="flex flex-col justify-between lg:flex-row">
            <div className="flex-1 order-2 lg:order-1 mt-10">
              <div className="mb-10 text-center lg:text-left text-6xl leading-tight font-Poppins font-bold">
                <h1>{GetAnimeDetails.title}</h1>
              </div>

              {/*  */}
              {/*  */}
              <div className="flex md:flex-row items-center md:items-start flex-col ">
                {/* image */}
                <div className="flex-1 w-fit">
                  <div className="relative w-[250px]  md:w-full aspect-[17/24] drop-shadow-[-15px_-15px_0px_red]">
                    <Image
                      src={GetAnimeDetails.images.webp.large_image_url}
                      fill
                      alt="anim"
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* property */}
                <div className="font-Poppins flex-1 w-fit container mt-4 sm:m-4">
                  <div>
                    <h3 className="text-2xl font-semibold ">Other Title</h3>
                    <div className="font-SourceSans text-lg leading-7 opacity-70 ">
                      <h4>{GetAnimeDetails.title_english}</h4>
                      <h4>{GetAnimeDetails.title_japanese}</h4>
                    </div>
                  </div>
                  <div className="font-medium my-6 w-full">
                    <ul className="flex flex-col">
                      <Dproperty prop={`Ranking`}>
                        {GetAnimeDetails.rank}
                      </Dproperty>
                      <Dproperty prop={`Score`}>
                        {GetAnimeDetails.score}
                      </Dproperty>
                      <Dproperty prop={`Status`}>
                        {GetAnimeDetails.status}
                      </Dproperty>
                      <Dproperty prop={"Release Date"}>
                        {GetAnimeDetails.score}
                      </Dproperty>

                      <Dproperty prop={"Genre"}>
                        {GetAnimeDetails.genres.map((item, index) => {
                          return (
                            <div className="inline mx-1" key={index}>
                              {item.name}
                            </div>
                          );
                        })}
                      </Dproperty>

                      <Dproperty prop={`Rating`}>
                        {GetAnimeDetails.rating}
                      </Dproperty>
                      <Dproperty prop={"Producer"}>
                        {GetAnimeDetails.producers.map((item, index) => {
                          return (
                            <div className="inline  mx-1" key={index}>
                              {item.name}
                            </div>
                          );
                        })}
                      </Dproperty>
                    </ul>
                  </div>
                  <div className="">
                    <h3 className="text-xl">Relations</h3>
                    <div className="text-sm">
                      {GetAnimeDetails.relations.map((item, index) => {
                        return (
                          <div
                            className="flex flex-col items-start mb-4"
                            key={item.mal_id}
                          >
                            <h5 className="whitespace-nowrap text-sm font-semibold">
                              {item.relation} :{" "}
                            </h5>
                            <div className="ml-2 text-sm">
                              {item.entry.map((entry, index) => {
                                return (
                                  <div className="flex gap-1" key={index}>
                                    <div className="opacity-80">
                                      {entry.type}
                                    </div>{" "}
                                    :
                                    <NavItem
                                      variants={"fade"}
                                      target={`/anime/${entry.mal_id}`}
                                    >
                                      {entry.name}
                                    </NavItem>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
              {/*  */}
            </div>
            <div className="lg:max-w-[250px] order-1 lg:order-2">
              <SideMenu />
            </div>
          </main>
        </section>
      </>
    )
  );
}

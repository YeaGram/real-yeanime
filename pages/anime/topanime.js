import Head from "next/head";
import NavigationBar from "../../components/navbar";
import Footers from "../../components/footer";
import InputRadio from "../../components/input/radio";
import { useEffect, useState } from "react";
import Card from "../../components/card";

export default function TopAnime() {
  const [CheckedAnimeType, setCheckedAnimeType] = useState("");
  const [CheckedAnimeFilter, setCheckedAnimeFilter] = useState("Score");
  const [Anime, setAnime] = useState();
  function handleCheckedAnimeType(e) {
    setCheckedAnimeType(e.currentTarget.value);
  }
  function handleCheckedAnimeFilter(e) {
    setCheckedAnimeFilter(e.currentTarget.value);
  }
  useEffect(() => {
    fetch(
      `https://api.jikan.moe/v4/top/anime?type=${CheckedAnimeType}&filter=${CheckedAnimeFilter}`
    )
      .then((res) => res.json())
      .then((data) => setAnime(data));
  }, [CheckedAnimeType, CheckedAnimeFilter]);

  console.log(CheckedAnimeType);
  console.log(Anime);

  return (
    Anime && (
      <div className="">
        <Head>
          <title>Top Anime</title>
        </Head>
        <NavigationBar />

        <div className="mt-32">
          <div className="relative w-fit mx-auto">
            <h2 className="font-poppins text-5xl font-bold relative tracking-wider text-center">
              Top Anime
            </h2>
          </div>
          <div className="container flex items-start sm:flex-col sm:items-center justify-center mx-auto my-5">
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={""}
                name={"TopTv"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Tv"}
                name={"TopTv"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Movie"}
                name={"TopMovie"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Ova"}
                name={"TopOva"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Special"}
                name={"TopSpecial"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Ona"}
                name={"TopOna"}
                isActive={CheckedAnimeType}
              />
              <InputRadio
                handleChange={handleCheckedAnimeType}
                label={"Music"}
                name={"TopMusic"}
                isActive={CheckedAnimeType}
              />
            </div>
            <div className="flex flex-col  sm:flex-row  justify-center gap-2 mt-1">
              <InputRadio
                handleChange={handleCheckedAnimeFilter}
                label={"Favorite"}
                name={"TopFavorite"}
                isActive={CheckedAnimeFilter}
              />
              <InputRadio
                handleChange={handleCheckedAnimeFilter}
                label={"Upcoming"}
                name={"TopUpcoming"}
                isActive={CheckedAnimeFilter}
              />
              <InputRadio
                handleChange={handleCheckedAnimeFilter}
                label={"ByPopularity"}
                name={"TopByPopularity"}
                isActive={CheckedAnimeFilter}
              />
              <InputRadio
                handleChange={handleCheckedAnimeFilter}
                label={"Airing"}
                name={"TopAiring"}
                isActive={CheckedAnimeFilter}
              />
              <InputRadio
                handleChange={handleCheckedAnimeFilter}
                label={"Score"}
                name={"TopScore"}
                isActive={CheckedAnimeFilter}
              />
            </div>
          </div>
        </div>
        <hr className="border-primary/40 container mx-auto" />
        <div className="container w-fit mx-auto my-10">
          <Card dataJson={Anime.data} blank={false} />
        </div>
        <Footers />
      </div>
    )
  );
}

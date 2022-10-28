import Card from "../card";
import LoadingState from "../loading";
import { _GetTopAiringAnimes } from "./getAnime";

export default function GetThisSeasonsAnime() {
  const [Loading, GetTopAiringAnime] = _GetTopAiringAnimes(12000);
  // if (Loading) return <LoadingState />;
  return (
    <section className="container mx-auto px-7 md:px-0 lg:px-7 mt-10">
      <div className="my-4 flex flex-col md:flex-row md:items-center container md:px-14 lg:px-0">
        <h2 className="font-Poppins font-bold text-4xl">This Seasons.</h2>
        <p className="text-primary italic font-SourceSans indent-2">
          animes in this season ~
        </p>
      </div>
      <Card dataJson={GetTopAiringAnime} variant="regular" />
      <div className="text-center">more</div>
    </section>
  );
}

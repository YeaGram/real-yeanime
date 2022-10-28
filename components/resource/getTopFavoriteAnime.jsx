import Card from "../card";
import LoadingState from "../loading";
import { _GetTopFavoriteAnimes } from "./getAnime";

export default function GetTopFavoriteAnime() {
  const [Loading, GetTopFavoriteAnime] = _GetTopFavoriteAnimes(18000);

  // if (Loading) return <LoadingState />;
  return (
    <section className="container mx-auto px-7 md:px-0 lg:px-7 mt-10">
      <div className="my-4 flex flex-col md:flex-row md:items-center container md:px-14 lg:px-0">
        <h2 className="font-Poppins font-bold text-4xl">Top Favorite.</h2>
        <p className="text-primary italic font-SourceSans indent-2">
          top favorite anime ~
        </p>
      </div>
      <Card dataJson={GetTopFavoriteAnime} variant="regular" />
      <div className="text-center">more</div>
    </section>
  );
}

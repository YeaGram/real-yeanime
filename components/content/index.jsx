import GetThisSeasonsAnime from "../resource/getThisSeasons";
import GetTopFavoriteAnime from "../resource/getTopFavoriteAnime";
import GetUpcomingSeasonsAnime from "../resource/getUpcomingSeasons";
import RandomAnime from "../resource/RandomAnime";

export default function Content() {
  return (
    <section>
      <main>
        <GetThisSeasonsAnime />
        <GetUpcomingSeasonsAnime />
        <GetTopFavoriteAnime />
        <RandomAnime />
      </main>
    </section>
  );
}

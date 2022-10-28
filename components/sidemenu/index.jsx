import GetTopAnime from "../resource/getTopAnime";
import GetTopAiringAnime from "../resource/getTopAiringAnime";
import GetTopMovieAnime from "../resource/getTopMovieAnime";

export default function SideMenu({ title, children, target }) {
  return (
    <ul className="border-2 p-5 gap-2 font-SourceSans flex lg:flex-col justify-center w-full h-full dark:border-white/50 dark:text-white">
      <GetTopAnime />
      <GetTopAiringAnime />
      <GetTopMovieAnime />
    </ul>
  );
}

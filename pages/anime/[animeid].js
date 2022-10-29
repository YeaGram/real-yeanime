import NavigationBar from "../../components/navbar";
import { _GeAnimeDetails } from "../../components/resource/getAnime";
import AnimeDetailContent from "../../components/content/animeDetails";
import { useRouter } from "next/router";
import LoadingState from "../../components/loading";

export default function AnimeDetails() {
  const router = useRouter();
  const { animeid } = router.query;

  if (!router.isReady) return <LoadingState />;
  return (
    <div className="overflow-x-hidden">
      <div>
        <NavigationBar />
        <AnimeDetailContent animeid={animeid} />
      </div>
    </div>
  );
}

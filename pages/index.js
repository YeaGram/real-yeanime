import Content from "../components/content";
import Footers from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import { _GetRandomAnimes } from "../components/resource/getAnime";
import LoadingState from "../components/loading";
export default function Home() {
  const [Loading, GetRandomAnime] = _GetRandomAnimes(24000);
  console.log(Loading);
  // if (Loading) return <LoadingState />;
  return (
    <div className="w-full overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Content />
      <Footers />
    </div>
  );
}

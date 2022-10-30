import Content from "../components/content";
import Footers from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import { _GetRandomAnimes } from "../components/resource/getAnime";
import LoadingState from "../components/loading";

export default function Home() {
  const [Loading, GetRandomAnime] = _GetRandomAnimes(24000);
  return (
    <div className="w-full overflow-x-hidden">
      {Loading ? (
        <div className="inset-0 fixed z-20 text-white backdrop-brightness-50 flex backdrop-blur-lg justify-center items-center ">
          <LoadingState />
        </div>
      ) : (
        ""
      )}
      <Head>
        <title>YeaNime</title>
      </Head>
      <Header />
      <Content />
      <Footers />
    </div>
  );
}

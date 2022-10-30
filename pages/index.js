import Content from "../components/content";
import Footers from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Head>
        <title>YeaNime</title>
      </Head>
      <Header />
      <Content />
      <Footers />
    </div>
  );
}

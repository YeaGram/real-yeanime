import Head from "next/head";
import Footers from "../components/footer";
import NavigationBar from "../components/navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>Haiyaa</title>
      </Head>
      <div>
        <NavigationBar />
        <main className="relative">
          <div class="flex w-full h-full justify-center">
            <div className="pb-20">
              <h2 className="font-poppins text-5xl mt-32 font-bold relative tracking-wider text-center">
                Hmmm..
              </h2>
              <p className="mt-7 font-SourceSans opacity-70">
                Sepertinya Terlalu Banyak Permintaan data, Bisa Juga Halaman
                yang Anda Tuju Tidak Ada, Atau Masih Dalam Pengembangan.
              </p>
            </div>
          </div>
          <div className="w-full bottom-0">
            <Footers />
          </div>
        </main>
      </div>
    </>
  );
}

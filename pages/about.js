import Head from "next/head";
import Footers from "../components/footer";
import NavigationBar from "../components/navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <NavigationBar />
        <main className="mt-32">
          <div class="container mx-auto">
            <h2 className="font-poppins text-5xl font-bold relative tracking-wider text-center">
              About
            </h2>
            <div className="text-center flex flex-col gap-7 max-w-4xl mx-auto mt-10 font-SourceSans leading-5 px-5 sm:px-10 text-lg">
              <p>Hello From Authors!</p>
              <p>
                Selamat datang di web ini, diwebsite ini berisi database dari
                anime anime maupun manga, baik yang terkenal maupun tidak, baik
                baru maupun lama.
              </p>
              <p>
                Webiste ini dibangun oleh saya sendiri sebagai bagian dari
                pembelajaran saya untuk mengembangkan ilmu mengenai web
                proggraming dan yang berkaiten dengannya.
              </p>
              <p>
                Pada dasarnya, website ini dibangun menggunakan Open API Jikan
                sebagai database utama untuk setiap anime maupun manga yang
                ada.Jika terdapat kesalahan data ataupun data tidak tampil,
                selain dari kesalahan saya atau bug yang ditimbulkan kemungkinan
                data yang anda inginkan tidak terdapat di OpenAPI yang saya
                gunakan.
              </p>
              <p>
                Website ini dibangun dengan teknologi NextJS + TailwindCSS yang
                mana merupakan teknologi yang baru bagi saya dan masih saya
                pelajari.
              </p>
              <p>
                Itu saja yang sempat saya sampaikan di halaman ini,
                <blockquote className="italic">
                  enjoy exploring the window.
                </blockquote>
              </p>
            </div>
          </div>
        </main>
        <Footers />
      </div>
    </>
  );
}

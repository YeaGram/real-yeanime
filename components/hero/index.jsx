import GetRecomendedAnime from "../resource/getrecomendedanime";
import SideMenu from "../sidemenu";

export default function Hero() {
  return (
    <section className="pt-20 dark:bg-black dark:text-white ">
      <div className="px-7 mx-auto py-4 xl:container">
        <div className="flex flex-col lg:flex-row justify-center  w-full gap-5">
          {/* sidemenu */}
          <div className="order-2 hidden sm:block lg:w-[20%] w-full">
            <SideMenu />
          </div>
          {/* Recomended */}
          <div className="lg:w-[80%] w-full">
            <GetRecomendedAnime />
          </div>
        </div>
      </div>
    </section>
  );
}

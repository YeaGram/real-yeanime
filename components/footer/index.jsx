import MainLogo from "../asset/logos";
import NavItem from "../navbar/navitems";

export default function Footers() {
  return (
    <div className="pt-20">
      <footer className="w-full shadow-[0px_-10px_10px_rgba(0,0,0,0.1)] relative z-0 ">
        <div className="absolute h-full pt-20 w-[10%] max-w-[50px] box-content bottom-0 z-0 bg-primary rounded-tr-full shadow-lg"></div>
        <div className="absolute h-full w-32 top-0 -z-10 bg-primary"></div>
        <div className="w-full dark:bg-black/50 py-20">
          <div className="flex flex-col md:flex-row max-w-3xl justify-between mx-auto ">
            <div className="flex flex-col items-center flex-1">
              <div className="w-32 ">
                <MainLogo />
              </div>
              <p className="md:p-0 px-20 leading-5 mt-4 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo quibusdam sed non dolorum aliquam esse sapiente
                voluptas, nobis praesentium asperiores.
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:mt-0 mt-10">
              <div className="flex gap-3 font-bold">
                <div>
                  <NavItem>About</NavItem>
                  <NavItem>Home</NavItem>
                </div>
                <div>
                  <NavItem>Anime</NavItem>
                  <NavItem>Manga</NavItem>
                </div>
              </div>
              <div className="mt-5 text-xm">
                <p>made with ♥ by dimas</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

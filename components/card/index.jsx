import Image from "next/image";
import NavItem from "../navbar/navitems";
import Link from "next/link";
export default function Card({ dataJson, variant }) {
  const variants = {
    hover: "hover",
    regular: "regular",
  };
  return variant === variants.hover ? (
    <div className="flex w-full justify-center flex-wrap xl:flex-nowrap gap-3 ">
      {dataJson.map((item, index) => {
        return (
          <div
            key={index}
            className="flex-1 md:flex-none lg:flex-1 md:w-[200px] min-w-[150px] "
          >
            <div className="relative w-full  aspect-[17/24] group overflow-hidden">
              <NavItem>
                <Image
                  src={item.images.webp.image_url}
                  fill
                  sizes={"100vw"}
                  alt={item.title}
                  className="object-cover"
                />
                <div className="flex items-end justify-center px-3 absolute inset-0 bottom-0 translate-y-full transition-all group-hover:translate-y-0 bg-gradient-to-t from-primary via-primary/0 to-primary/0">
                  <p className="text-center block py-2 mb-5 font-SourceSans text-lg font-semibold text-white  z-10">
                    {item.title}
                  </p>
                </div>
              </NavItem>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex w-full justify-center flex-wrap xl:flex-nowrap gap-3 animate-[fadein_1s_ease]">
      {dataJson.map((item, index) => {
        return (
          <div
            key={index}
            className="flex-1 md:flex-none lg:flex-1 md:w-[200px] min-w-[150px] "
          >
            <NavItem>
              <div className="relative w-full aspect-[17/24]">
                <Image
                  src={item.images.webp.image_url}
                  fill
                  sizes={"100vw"}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            </NavItem>
            <p className="text-center block py-2 font-SourceSans text-lg font-semibold text-black/70 dark:text-white/50 hover:text-inherit">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

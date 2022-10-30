import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingState from ".";

export function Loading() {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoad(true);
    const handleComplete = (url) => url === router.asPath && setLoad(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    load && (
      <div className="inset-0 fixed z-20 text-white backdrop-brightness-50 flex backdrop-blur-lg justify-center items-center ">
        <LoadingState />
      </div>
    )
  );
}

import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Loading } from "../components/loading/mainloading";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    document.body.setAttribute("class", "dark:bg-black dark:text-white");
  }, []);
  if (!showChild) {
    return null;
  }
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

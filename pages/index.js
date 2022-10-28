import Content from "../components/content";
import Footers from "../components/footer";
import Header from "../components/header";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Content />
      <Footers />
    </div>
  );
}

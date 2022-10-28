import { MdClose, MdMenu } from "react-icons/md";
export default function Hamburger({ state }) {
  return <div>{state ? <MdClose /> : <MdMenu />}</div>;
}

import { FaCircle } from "react-icons/fa";
export default function Dproperty({ children, prop }) {
  return (
    <li className="relative block mb-0 ">
      <div className="flex items-start gap-2">
        <div className="flex fle items-center gap-2">
          <div className="text-primary text-xs">
            <FaCircle />
          </div>
          <div className="text-xm whitespace-nowrap">
            <h6>{prop} : </h6>
          </div>
        </div>
        <div className="mt-[3px] ml-0 ">
          <div className="flex flex-col lg:inline text-sm leading-6 opacity-60">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}

import { AiOutlineLoading } from "react-icons/ai";
export default function LoadingState({ title }) {
  return (
    <li className="flex-1 block w-full ">
      <div className="flex justify-center">
        <h3 className="font-SourceSans text-xl font-bold">{title}</h3>
        <div className="text-sm font-Poppins w-fit">
          <div className="mt-5 mb-2 flex justify-center">
            <span className="animate-spin w-fit text-2xl block m-0">
              <AiOutlineLoading />
            </span>
          </div>
          <p className="text-xs opacity-50 italic">Sedang Memuat {title}</p>
        </div>
      </div>
    </li>
  );
}

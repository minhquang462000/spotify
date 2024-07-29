"use client";
import { FaPause, FaPlay, FaPlus, FaRegHeart } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import PopupText from "@/components/PopupText";
import FunctionBarTrackPage from "@/components/Lists/FunctionBarTrackPage";

export interface ICardPlayingTrackPageProps {
  visible: number;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardPlayingTrackPage(
  props: ICardPlayingTrackPageProps
) {
  const [isShowFunctionBar, setIsShowFunctionBar] = useState(false);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowFunctionBar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsShowFunctionBar]);
  const { visible, isPlaying, setIsPlaying } = props;

  return (
    <div
      className={`flex  h-[100px] px-5  justify-between ${
        visible > 10 ? "invisible" : "visible"
      }   items-center `}
    >
      <div className="flex gap-8 items-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-[#1fdf64]  shadow-md shadow-[#161616] text-black hover:scale-105 transition-all duration-300   flex justify-center items-center w-14 h-14 rounded-full "
        >
         {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button className="text-[#999]  border-4 border-[#999] hover:border-white w-8 h-8 flex justify-center items-center  rounded-full relative group/popup hover:text-white">
          <FaPlus size={20} />
          <PopupText content="Lưu vào thư viện" />
        </button>
        <div
          onClick={() => setIsShowFunctionBar(!isShowFunctionBar)}
          className="relative"
          ref={wrapperRef}
        >
          {" "}
          <button className="text-[#666]  relative h-full group/popup hover:text-white">
            {" "}
            <PopupText
              content={`Các tuỳ chọn khác cho ${"Đau để trưởng thành"}`}
            />
            <PiDotsThreeBold size={40} />
          </button>
          <div
            className={`absolute top-14  w-[350px]  left-0 ${
              isShowFunctionBar ? "block" : "hidden"
            }`}
          >
            <FunctionBarTrackPage />
          </div>
        </div>
      </div>
    </div>
  );
}

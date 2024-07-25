"use client";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import FunctionBar from "../SingerPage/FunctionBar";
import { useEffect, useRef, useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { IoList } from "react-icons/io5";
import PopupText from "@/components/PopupText";

export interface ICardPlayingAlbumProps {
  isVisible: number;
}

export default function CardPlayingPage(props: ICardPlayingAlbumProps) {
  const { isVisible } = props;
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

  return (
    <div
      className={`flex  my-3 px-5  justify-between ${
        isVisible > 10 ? "invisible" : "visible"
      }   items-center `}
    >
      <div className="flex gap-8 items-center">
        <button className="bg-[#1fdf64] py-3 shadow-md shadow-[#161616] hover:scale-105 transition-all duration-300   flex justify-center items-center w-14 h-14 rounded-full ">
          <FaPlay size={20} className="place-items-center" color="black" />
        </button>
        <button className="text-[#999] py-3 relative group/popup hover:text-white">
          <FaRegHeart size={30} />
          <PopupText content="Lưu vào thư viện" />
        </button>
        <div
          onClick={() => setIsShowFunctionBar(!isShowFunctionBar)}
          className="relative"
          ref={wrapperRef}
        >
          {" "}
          <button className="text-[#666] py-3 relative h-full group/popup hover:text-white">
            {" "}
            <PopupText content="Các lựa chọn khác cho Golden" />
            <PiDotsThreeBold size={40} />
          </button>
          <div
            className={`absolute top-14  w-[350px]  left-0 ${
              isShowFunctionBar ? "block" : "hidden"
            }`}
          >
            <FunctionBar />
          </div>
        </div>
      </div>
      <button className="font-bold flex text-sm items-center gap-2">
        Danh sách <IoList size={20} />
      </button>
    </div>
  );
}

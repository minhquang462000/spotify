"use client";
import { FaPlay } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";
import FunctionBar from "../Cards/SingerPage/FunctionBar";
import { useEffect, useRef, useState } from "react";
import CardSongSingerPage from "../Cards/SingerPage/CardSongSingerPage";

export interface IFunctionBarProps {}

export default function ListSongArtistPage(props: IFunctionBarProps) {
  const [isShowFunctionBar, setIsShowFunctionBar] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
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
    <section className="p-4 w-full bg-gradient-to-t to-[#1a1a1a] from-transparent">
      <div className="flex gap-7 items-center">
        <button className="bg-[#1fdf64] shadow-md shadow-[#161616] hover:scale-105 transition-all duration-300   flex justify-center items-center w-14 h-14 rounded-full ">
          <FaPlay size={20} className="place-items-center" color="black" />
        </button>
        <button className="border-[1px]  text-xs hover:scale-105 hover:border-white border-[#666] py-[5px] px-4 font-bold rounded-full">
          Theo dõi
        </button>
        <div
          onClick={() => setIsShowFunctionBar(!isShowFunctionBar)}
          className="relative"
          ref={wrapperRef}
        >
          {" "}
          <button className="text-[#666] hover:text-white">
            {" "}
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
      <div className="mt-5 w-full ">
        <h3 className="text-2xl mb-5 mt-3 font-bold">Phổ biến</h3>
        <div className={`w-full   h-max`}>
          <CardSongSingerPage />
          <CardSongSingerPage />
          <CardSongSingerPage />
          <CardSongSingerPage />
          <CardSongSingerPage />
        </div>
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="text-[#999] w-max ml-6 my-5  hover:text-white font-bold text-sm"
        >
          {isShowMore ? "Ẩn bớt" : "Xem thêm"}
        </button>
      </div>
    </section>
  );
}

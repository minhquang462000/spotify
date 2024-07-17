"use client";
import { FaPlay } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";
import FunctionBar from "../Cards/SingerPage/FunctionBar";
import { useEffect, useRef, useState } from "react";
import CardSongSingerPage from "../Cards/SingerPage/CardSongSingerPage";
import CardInfoSinger from "../Cards/SingerPage/CardInfoSinger";
import FooterChild from "../RenderPageChild/FooterChild";

export interface IFunctionBarProps {
  isVisible: number;
}

export default function ListSongArtistPage(props: IFunctionBarProps) {
  const { isVisible } = props;
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
    <section className=" w-full relative h-full bg-[#121212]">
      <div className="absolute top-0 bg-gradient-to-t z-10 to-[#494949] from-transparent left-0 w-full h-[300px]"></div>
      <div className="flex flex-col min-h-screen absolute z-20 top-0 w-full">
        <div
          className={`flex gap-7 p-4 items-center ${
            isVisible > 10 && "hidden"
          }`}
        >
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
        <div
          className={` w-full px-4 ${
            isShowMore ? "h-max" : "h-[390px] overflow-hidden"
          } `}
        >
          <h3 className="text-2xl mt-3 font-bold">Phổ biến</h3>
          <div className={` w-full pt-5  h-max`}>
            <CardSongSingerPage />
            <CardSongSingerPage />
            <CardSongSingerPage />
            <CardSongSingerPage />
            <CardSongSingerPage />
            <CardSongSingerPage />
            <CardSongSingerPage />
          </div>
        </div>
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="text-[#999] w-max ml-6 my-5  px-4 hover:text-white font-bold text-sm"
        >
          {isShowMore ? "Ẩn bớt" : "Xem thêm"}
        </button>
        <CardInfoSinger />
        <FooterChild />
      </div>
    </section>
  );
}

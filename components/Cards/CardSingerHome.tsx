import * as React from "react";
import { FaCirclePlay, FaPlay } from "react-icons/fa6";

export interface ICardSingerHomeProps {}

export default function CardSingerHome(props: ICardSingerHomeProps) {
  return (
    <div className="flex flex-col cursor-pointer  group rounded-md  p-3  hover:bg-gradient-to-t from-[#1d1d1d] to-transparent gap-2">
      <div className="w-[210px] m-auto relative h-[210px]">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://media.laodong.vn/storage/newsportal/2019/7/11/743746/Sontungmtp-1-3-03142.jpg?w=720&crop=auto&scale=both"
          alt=""
        />
        <button className="bg-[#1fdf64] hover:scale-105 absolute bottom-4 invisible group-hover:visible right-4 flex justify-center items-center w-12 h-12 rounded-full ">
          <FaPlay size={20} className="place-items-center" color="black" />
        </button>
      </div>
      <p className="font-bold text-start ">Sơn Tùng M-TP</p>
      <p className="text-[#818181] text-sm font-bold">Nghệ sĩ</p>
    </div>
  );
}

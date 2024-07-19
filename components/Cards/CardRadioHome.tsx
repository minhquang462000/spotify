import * as React from "react";
import { FaCirclePlay, FaPlay } from "react-icons/fa6";

export interface ICardRadioHomeProps {}

export default function CardRadioHome(props: ICardRadioHomeProps) {
  return (
    <div className="flex flex-col cursor-pointer  w-full  group hover:bg-[#191919] rounded-md  p-2    gap-2">
      <div className="max-w-[180px]  aspect-square mx-auto w-full  relative  ">
        <img
          className="w-full h-full rounded-md object-cover"
          src="https://seeded-session-images.scdn.co/v2/img/540/r/artist/5dfZ5uSmzR7VQK0udbAVpf/vi"
          alt=""
        />
        <button className="bg-[#1fdf64] shadow-md shadow-[#333] hover:scale-105 absolute bottom-1 opacity-0 transition-all duration-300 group-hover:opacity-100 right-1 flex justify-center items-center w-12 h-12 rounded-full ">
          <FaPlay size={20} className="place-items-center" color="black" />
        </button>
      </div>
      <p className="font-bold text-start mt-1 w-full overflow-hidden truncate ">
        Sơn Tùng Mtp Radio
      </p>
      <p className="text-[#818181] text-sm text-wrap font-bold line-clamp-2">
        Với MONO,Đen,Hiếu Thứ Hai và nhiều hơn 1 nghệ sĩ nữa
      </p>
    </div>
  );
}

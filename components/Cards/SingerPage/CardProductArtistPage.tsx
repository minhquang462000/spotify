import * as React from "react";
import { BsDot } from "react-icons/bs";
import { FaCirclePlay, FaPlay } from "react-icons/fa6";

export interface ICardAlbumHomeProps {
  urlImage: string;
  title: string;
  info: string;
  type: string;
}

export default function CardProductArtistPage(props: ICardAlbumHomeProps) {
  const { urlImage, title, info, type } = props;
  return (
    <div className="flex flex-col cursor-pointer max-w-[200px]   group rounded-md  p-3   hover:bg-gradient-to-t from-[#1a1a1a] to-transparent gap-1">
      <div className="w-[180px] mx-auto  relative h-[180px] min-w-[150px] min-h-[150px]">
        <img
          className="w-full h-full rounded-md  object-cover"
          src={urlImage}
          alt=""
        />
        <button className="bg-[#1fdf64] shadow-md shadow-[#333] hover:scale-105 absolute bottom-1 opacity-0 transition-all duration-300 group-hover:opacity-100 right-1 flex justify-center items-center w-12 h-12 rounded-full ">
          <FaPlay size={20} className="place-items-center" color="black" />
        </button>
      </div>
      <p className="font-bold text-start mt-1 w-full  overflow-hidden truncate ">
        {title}
      </p>
      <p className="text-[#d3d3d3]  line-clamp-2 flex items-center flex-wrap  font-medium text-[13px]">
        {info}
        <BsDot size={20} />
        <span>{type}</span>
      </p>
    </div>
  );
}

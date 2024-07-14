import * as React from "react";
import { FaCirclePlay, FaPlay } from "react-icons/fa6";

export interface ICardAlbumHomeProps {
    urlImage: string
    title: string
    info: string
}

export default function CardListHome({ urlImage, title, info }: ICardAlbumHomeProps) {
    return (
        <div className="flex flex-col cursor-pointer max-w-[250px]  group rounded-md  p-3   hover:bg-gradient-to-t from-[#1a1a1a] to-transparent gap-2">
            <div className="max-w-[160px]  relative max-h-[160px] min-w-[150px] min-h-[150px]">
                <img
                    className="w-full h-full rounded-md object-cover"
                    src={urlImage}
                    alt=""
                />
                <button className="bg-[#1fdf64] shadow-md shadow-[#333] hover:scale-105 absolute bottom-1 opacity-0 transition-all duration-300 group-hover:opacity-100 right-1 flex justify-center items-center w-12 h-12 rounded-full ">
                    <FaPlay size={20} className="place-items-center" color="black" />
                </button>
            </div>
            <p className="font-bold text-start mt-1 w-full line-clamp-2 overflow-hidden truncate ">{title}</p>
            <p className="text-[#818181] line-clamp-2 text-sm font-bold">{info}</p>
        </div>
    );
}

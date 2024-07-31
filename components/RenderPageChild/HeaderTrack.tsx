"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaRegBell } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IHeaderTrackProps {
  visible: number;
  color?: string;
  isPlaying?: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export default function HeaderTrack(props: IHeaderTrackProps) {
  const { visible, color, isPlaying, setIsPlaying } = props;
  const router = useRouter();
  return (
    <header
      style={{ backgroundColor: visible > 0 ? color || "#121212" : "#12121270" }}
      className={` w-full     sticky top-0  z-[999] 
     h-[60px] px-6 `}
    >
      <div className=" flex justify-between w-full h-full items-center max-w-[1900px]">
        <div className="flex gap-4 items-center">
          <div className="flex gap-3">
            <button
              onClick={() => router.back()}
              className="bg-[#000000b3] hover:bg-[#333] rounded-full w-7 h-7 flex items-center justify-center"
            >
              <IoIosArrowBack size={20} color="#9a9a9a" />
            </button>
            <button
              onClick={() => router.forward()}
              className="bg-[#000000b3] rounded-full hover:bg-[#333] w-7 h-7 flex items-center justify-center"
            >
              <IoIosArrowForward size={20} color="#9a9a9a" />
            </button>
          </div>
          <div
            className={`flex items-center gap-3 ${visible > 10 ? "" : "hidden"
              }`}
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#1fdf64]  shadow-md shadow-[#161616] text-black hover:scale-105 transition-all duration-300   flex justify-center items-center w-10 h-10 rounded-full "
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>
            <p className="text-2xl font-semibold">Sơn Tùng M-TP</p>
          </div>
        </div>
        <div className="flex gap-5 items-center text-sm font-bold">
          <Link href={""}>
            <button className="text-black bg-white rounded-full hover:scale-105 px-4 py-2">
              Khám phá Premium
            </button>
          </Link>
          <Link href={""}>
            <button className="flex hover:scale-105 items-center gap-2">
              <span className="border-white border rounded-full p-1 flex justify-center items-center">
                <FaArrowDownLong size={12} />
              </span>
              Cài đặt Ứng dụng
            </button>
          </Link>
          <Link href={""}>
            <FaRegBell className="text-[#999] hover:scale-105 hover:text-white" size={20} />
          </Link>
          <Link href={""}>
            <button className="bg-[#fb6336] text-black rounded-full hover:scale-105 h-7 w-7 flex justify-center items-center">
              M
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

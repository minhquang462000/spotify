"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IHeaderSearchPageProps {}

export default function HeaderSearchPage({}: IHeaderSearchPageProps) {
  const router = useRouter();

  return (
    <header
      className={` w-full   bg-[#121212]   sticky top-0  z-[999] 
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
          <span className="relative  w-max">
            <input
              placeholder="Bạn muốn phát nội dung gì?"
              className="outline-none w-[400px] px-2 py-1 focus:ring ring-white pl-8 rounded-full hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] bg-[#242424] h-[45px] "
              type="text"
            />
            <CiSearch
              size={20}
              className="absolute top-1/2 -translate-y-1/2 left-2"
            />
          </span>
        </div>
        <div className="flex gap-4 font-bold">
          <Link href={"/auth/register"}>
            <button className="py-3 px-6 hover:scale-105 hover:text-white text-[#9a9a9a]">
              Đăng ký
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button className="py-2 px-6 bg-white hover:scale-105 rounded-full text-black">
              Đăng nhập
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

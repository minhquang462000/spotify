"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IHeaderChildProps {
  isVisible: number;
  hidden: boolean;
}

export default function HeaderChild({ isVisible, hidden }: IHeaderChildProps) {
  const router = useRouter();
  const [css, setCss] = useState("");
  useEffect(() => {
    if (isVisible > 10) {
      setCss("bg-opacity-100");
    } else if (isVisible > 0) {
      setCss("bg-opacity-30");
    } else {
      setCss("bg-opacity-0");
    }
  }, [isVisible]);
  return (
    <header
      className={` w-full   bg-[#121212]   sticky top-0  z-[999] 
      ${hidden ? "bg-opacity-50  " : ""} ${css}  h-[60px] px-6 `}
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
            className={`flex items-center gap-3 ${
              isVisible > 10 ? "" : "hidden"
            }`}
          >
            <button className="bg-[#1fdf64] shadow-md shadow-[#333] hover:scale-105 transition-all duration-300   flex justify-center items-center w-10 h-10 rounded-full ">
              <FaPlay size={18} className="place-items-center" color="black" />
            </button>
            <p className="text-2xl font-semibold">Sơn Tùng M-TP</p>
          </div>
        </div>
        <div className="flex gap-4 font-bold">
          <Link href={"/register"}>
            <button className="py-3 px-6 hover:scale-105 hover:text-white text-[#9a9a9a]">
              Đăng ký
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="py-2 px-6 bg-white hover:scale-105 rounded-full text-black">
              Đăng nhập
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IHeaderChildProps {}

export default function HeaderChild(props: IHeaderChildProps) {
  const pathName = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <header
      className={`flex justify-between w-full    max-w-[1900px] sticky top-0  z-[999] 
      ${
        pathName === "/" ? "bg-opacity-50  bg-[#1a1a1a]" : ""
      } py-1 h-[70px] px-6 items-center `}
    >
      <div className="flex gap-4 items-center">
        <div className="flex gap-3">
          <button
            onClick={() => router.back()}
            className="bg-[#000000b3] hover:bg-[#333] rounded-full w-8 h-8 flex items-center justify-center"
          >
            <IoIosArrowBack size={25} color="#9a9a9a" />
          </button>
          <button
            onClick={() => router.forward()}
            className="bg-[#000000b3] rounded-full hover:bg-[#333] w-8 h-8 flex items-center justify-center"
          >
            <IoIosArrowForward size={25} color="#9a9a9a" />
          </button>
        </div>
        <div
          className={`flex items-center gap-3 ${
            pathName === "/" || !isVisible ? "hidden" : ""
          }`}
        >
          <button className="bg-[#1fdf64] shadow-md shadow-[#333] hover:scale-105 transition-all duration-300   flex justify-center items-center w-14 h-14 rounded-full ">
            <FaPlay size={20} className="place-items-center" color="black" />
          </button>
          <p className="text-3xl font-semibold">Sơn Tùng M-TP</p>
        </div>
      </div>
      <div className="flex gap-4 font-bold">
        <Link href={"/register"}>
          <button className="py-3 px-6 hover:scale-105 hover:text-white text-[#9a9a9a]">
            Đăng ký
          </button>
        </Link>
        <Link href={"/login"}>
          <button className="py-3 px-6 bg-white hover:scale-105 rounded-full text-black">
            Đăng nhập
          </button>
        </Link>
      </div>
    </header>
  );
}

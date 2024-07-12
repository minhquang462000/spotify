"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IHeaderChildProps {}

export default function HeaderChild(props: IHeaderChildProps) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-3">
        <button
          onClick={() => router.back()}
          className="bg-[#000000b3] rounded-full w-8 h-8 flex items-center justify-center"
        >
          <IoIosArrowBack size={25} color="#9a9a9a" />
        </button>
        <button
          onClick={() => router.forward()}
          className="bg-[#000000b3] rounded-full w-8 h-8 flex items-center justify-center"
        >
          <IoIosArrowForward size={25} color="#9a9a9a" />
        </button>
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
    </div>
  );
}

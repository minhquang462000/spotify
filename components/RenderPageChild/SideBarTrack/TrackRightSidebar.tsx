"use client";

import FunctionBarTrackPage from "@/components/Lists/FunctionBarTrackPage";
import PopupText from "@/components/PopupText";
import { useEffect, useRef, useState } from "react";
import { IoMdClose, IoMdMusicalNote } from "react-icons/io";
import { PiDotsThreeBold } from "react-icons/pi";
import HeaderRightSidebar from "./HeaderRightSidebar";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export interface ITrackRightSidebarProps {}

export default function TrackRightSidebar(props: ITrackRightSidebarProps) {
  return (
    <div className="w-full bg-[#121212]  rounded-md sticky z-[888] top-0 px-3  flex flex-col  h-full ">
      <HeaderRightSidebar />
      <div className="w-full   body-childHome flex flex-col gap-5">
        <img
          className="w-full aspect-square  object-cover"
          src="https://i.scdn.co/image/ab67616d00001e02e88e2e6c94ec9e1c0ab4d122"
          alt=""
        />
        <div className="flex justify-between items-center">
          <span>
            <p className="hover:underline font-bold text-2xl">
              <Link href="#">Đau Để Trưởng Thành</Link>
            </p>
            <p className="hover:underline font-bold text-[#a7a7a7]">
              <Link href="#">Only C</Link>
            </p>
          </span>
          <button>
            {" "}
            <FiPlusCircle size={25} />
          </button>
        </div>
        <ul className="bg-[#1f1f1f] font-bold flex flex-col gap-4 p-2 rounded-md">
          <li className="flex justify-between mb-2 gap-5 font-bold">
            <p className="w-2/3 overflow-hidden truncate">
              Nguời tham gia thực hiện
            </p>
            <button className="w-1/3 hover:underline hover:scale-105  hover:text-white overflow-hidden truncate text-sm text-[#a7a7a7]">
              Hiện tất cả
            </button>
          </li>
          <li className="flex justify-between items-center">
            <span>
              <p className="hover:underline ">
                <Link href={"#"}>Only C</Link>
              </p>
              <p className="text-sm text-[#a7a7a7]"> Nghệ Sĩ Chính</p>
            </span>
            <button className=" border-[#a7a7a7] hover:border-white hover:scale-105 border px-3 py-1 rounded-full text-sm">
              Huỷ theo dõi
            </button>
          </li>
          <li>
            <p>Nguyễn Phúc Thiện</p>
            <p className="text-sm text-[#a7a7a7]">
              {" "}
              Nhà Soạn Nhạc, Người Viết Lời
            </p>
          </li>
          <li>
            <p>Nguyến Phúc Thạch</p>
            <p className="text-sm text-[#a7a7a7]"> Nhà sản xuất</p>
          </li>
        </ul>
        <div className="bg-[#1f1f1f] rounded-md p-2">
          <nav className="flex justify-between mb-2 gap-5 font-bold">
            <p className="w-2/3 overflow-hidden truncate">
              Tiếp theo trong danh sách chờ
            </p>
            <button className="w-1/3 hover:underline hover:scale-105 hover:text-white overflow-hidden truncate text-sm text-[#a7a7a7]">
              Mở danh sách chờ
            </button>
          </nav>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href={"#"}>
                <div className="flex group p-2 rounded-md hover:bg-[#3e3e3e] font-semibold gap-2">
                  <span className="relative text-[#a7a7a7] w-5 flex justify-center items-center">
                    <IoMdMusicalNote className="absolute group-hover:hidden" />
                    <FaPlay
                      size={15}
                      className="absolute hidden group-hover:block"
                    />
                  </span>
                  <img
                    className="w-12 h-12 object-cover rounded-md"
                    src="https://i.scdn.co/image/ab67616d00001e02e88e2e6c94ec9e1c0ab4d122"
                    alt=""
                  />
                  <span className="w-2/3">
                    <p className="w-full overflow-hidden truncate">
                      {" "}
                      Đường một chiều
                    </p>
                    <ul className="flex text-sm text-[#a7a7a7] w-full overflow-hidden flex-wrap gap-1">
                      <li>Hoàng Tú</li>
                      <li>,Andiez</li>
                    </ul>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

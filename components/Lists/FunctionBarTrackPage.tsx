import Link from "next/link";
import * as React from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { FaPlus, FaSearch, FaSpotify, FaUserCheck } from "react-icons/fa";
import {
  FaArrowUpRightFromSquare,
  FaRegShareFromSquare,
} from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { IoRadio } from "react-icons/io5";
import { LuListMusic, LuListPlus } from "react-icons/lu";
import { PiCopySimpleBold, PiWarningOctagonBold } from "react-icons/pi";
import { TbWaveSquare } from "react-icons/tb";

export interface IFunctionBarTrackPageProps {}

export default function FunctionBarTrackPage(
  props: IFunctionBarTrackPageProps
) {
  return (
    <ul className="text-xs w-full rounded-md text-[#d3d3d3]  shadow shadow-black bg-[#1a1a1a] p-1 h-full font-medium">
      <li className="p-3 w-full flex justify-between relative group hover:bg-[#3e3e3e]">
        <span className="flex items-center gap-2">
          <FaPlus size={20} color="gray" />
          Thêm vào danh sách phát
        </span>
        <IoMdArrowDropright size={20} />
        <ul className="  p-1 w-full shadow-black hidden group-hover:block rounded-md bg-[#1a1a1a] shadow top-0  absolute -right-[340px]  font-medium">
          <li className="p-3 w-full  border-[#3e3e3e] hover:bg-[#3e3e3e]">
            <Link href={"#"}>
              <span className="flex w-full items-center gap-2">
                <FaSearch size={20} />
                Tìm một danh sách phát
              </span>
            </Link>
          </li>
          <li className="p-3 w-full  border-[#3e3e3e] hover:bg-[#3e3e3e]">
            <Link href={"#"}>
              <span className="flex w-full items-center gap-2">
                <FaPlus size={20} />
                Danh sách phát mới
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <FiPlusCircle size={20} />
            Lưu vào bài hát đã thích của bạn
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <LuListPlus size={20} />
            Thêm vào danh sách chờ
          </span>
        </Link>
      </li>
      <li className="p-3 w-full border-t border-[#3e3e3e] hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <FaUserCheck size={20} />
            Chuyển đến radio theo nghệ sĩ
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <LuListPlus size={20} />
            Chuyển tôi đến nghệ sĩ
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <CiCircleChevUp size={20} />
            Chuyển tôi đến Album
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <LuListMusic />
            Xem thông tin ghi công
          </span>
        </Link>
      </li>
      <li className="p-3 w-full flex justify-between relative group hover:bg-[#3e3e3e]">
        <span className="flex items-center gap-2">
          <FaRegShareFromSquare size={22} />
          Chia sẻ
        </span>
        <IoMdArrowDropright size={20} />
        <ul className="  p-1 w-full shadow-black hidden group-hover:block rounded-md bg-[#1a1a1a] shadow top-0  absolute -right-[340px]  font-medium">
          <li className="p-3 w-full  border-[#3e3e3e] hover:bg-[#3e3e3e]">
            <Link href={"#"}>
              <span className="flex w-full items-center gap-2">
                <PiCopySimpleBold size={20} />
                Sao chép đường liên kết đến nghệ sĩ
              </span>
            </Link>
          </li>
          <li className="p-3 w-full  border-[#3e3e3e] hover:bg-[#3e3e3e]">
            <Link href={"#"}>
              <span className="flex w-full items-center gap-2">
                <TbWaveSquare size={20} />
                Nhúng bản nhạc
              </span>
            </Link>
          </li>
        </ul>
      </li>

      <li className="p-3 w-full border-t border-[#3e3e3e] hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <FaSpotify size={20} />
            Mở trong ứng dụng dành cho máy tính
          </span>
        </Link>
      </li>
    </ul>
  );
}

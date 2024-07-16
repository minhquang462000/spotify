import Link from "next/link";
import * as React from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";
import {
  FaArrowUpRightFromSquare,
  FaRegShareFromSquare,
} from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { IoRadio } from "react-icons/io5";
import {
  PiArrowSquareUpLight,
  PiCopySimpleBold,
  PiWarningOctagonBold,
} from "react-icons/pi";
import { TbWaveSquare } from "react-icons/tb";

export interface IFunctionBarProps {}

export default function FunctionBar(props: IFunctionBarProps) {
  return (
    <ul className="text-xs w-full rounded-md  shadow shadow-black bg-[#1a1a1a] p-1 h-full font-medium">
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <HiOutlineUserPlus size={18} />
            Theo dõi
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full items-center gap-2">
            <IoRadio size={20} />
            Chuyển đến radio theo nghệ sĩ
          </span>
        </Link>
      </li>
      <li className="p-3 w-full hover:bg-[#3e3e3e]">
        <Link href={"#"}>
          <span className="flex w-full justify-between items-center gap-2">
            <span className="flex items-center gap-2">
              <PiWarningOctagonBold size={20} />
              Báo cáo
            </span>
            <FaArrowUpRightFromSquare size={15} />
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
                Nhúng nghệ sĩ
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

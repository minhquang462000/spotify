import * as React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import Link from "next/link";

export interface IFooterSideBarProps {}

export default function FooterSideBar(props: IFooterSideBarProps) {
  return (
    <footer className=" px-6 text-sm text-[#a7a7a7]  py-5">
      <ul className="flex my-3 flex-wrap gap-x-4 gap-y-3">
        <li>
          <Link href="">Pháp lý</Link>
        </li>
        <li>
          <Link href={""}>Trung tâm an toàn và quyền riêng tư</Link>
        </li>
        <li>
          <Link href={""}>Chính sách quyền riêng tư</Link>
        </li>
        <li>
          <Link href={""}>Cookie</Link>
        </li>
        <li>
          <Link href={""}>Giới thiệu Quảng cáo</Link>
        </li>
        <li>
          <Link href={""}>Hỗ trợ tiếp cập</Link>
        </li>
        <li className="w-full">
          <Link href={""}>Cookie</Link>
        </li>
      </ul>
      <button className="flex items-center font-bold gap-2 mt-8 mb-4 border-[1px] hover:scale-105 text-white  rounded-full py-[2px] px-4">
        <MdOutlineLanguage size={25} />
        Tiếng Việt
      </button>
    </footer>
  );
}

import Link from "next/link";
import * as React from "react";
import { FaPlus } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";

export interface IBodySideBarProps {}

export default function BodySideBar(props: IBodySideBarProps) {
  return (
    <div className="w-full h-full  text-sm  overflow-hidden">
      <div className="flex px-6 py-5  justify-between items-center">
        <span
          className={`flex  cursor-pointer items-center gap-2 hover:underline hover:font-bold`}
        >
          <LuLibrary size={25} />
          Thư viện
        </span>
        <button>
          <FaPlus />
        </button>
      </div>
      <ul className="font-semibold h-full overflow-hidden px-3 flex flex-col overflow-y-auto gap-4 ">
        <li className="flex bg-[#242424] px-4 py-5  rounded-md flex-col gap-2">
          <p className="">Tạo danh sách phát đầug tiên cảu bạn</p>
          <span className="text-sm"> Rất dễ chúng tôi sẽ giúp bạn</span>
          <button className="text-[#000] mt-5 text-sm w-max bg-white px-5 py-2 hover:scale-105 transition-all duration-300 rounded-full">
            Tạo danh sách phát
          </button>
        </li>
        <li className="flex bg-[#242424] px-4 py-5  rounded-md flex-col gap-2">
          <p className="">Hãy cùng tìm và theo dõi một số Podcast</p>
          <span className="text-sm">
            Chúng tôi sẽ cập nhật cho bạn thông tin về cá tập mới
          </span>
          <Link href="/genre/podcasts-web">
            <button className="text-[#000] text-sm mt-5 w-max bg-white px-5 py-2 hover:scale-105 transition-all duration-300 rounded-full">
              Duyệt xem podcast
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

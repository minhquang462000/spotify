import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export interface IHeaderSidebarProps {}

export default function HeaderSidebar(props: IHeaderSidebarProps) {
  return (
    <header className="bg-[#121212] flex w-full h-max flex-col gap-5 justify-center py-5 rounded-md px-6  ">
      <div className="">
        <Link href="/">
          <span className={`flex  font-bold items-center gap-2`}>
            <FaSpotify size={25} />
            Spotify
          </span>
        </Link>
      </div>
      <div>
        <Link href="/">
          <span className={`flex  items-center gap-2 hover:font-bold`}>
            <IoHome size={25} />
            Trang chủ
          </span>
        </Link>
      </div>
      <div>
        <Link href="/search">
          <span className={`flex  items-center gap-2 hover:font-bold`}>
            <CiSearch size={25} />
            Tìm kiếm
          </span>
        </Link>
      </div>
    </header>
  );
}

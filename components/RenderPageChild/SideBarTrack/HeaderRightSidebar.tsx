import FunctionBarTrackPage from "@/components/Lists/FunctionBarTrackPage";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiDotsThreeBold } from "react-icons/pi";


export interface IHeaderRightSidebarProps {
}

export default function HeaderRightSidebar (props: IHeaderRightSidebarProps) {
  const [isShowFunctionBar, setIsShowFunctionBar] = useState(false);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowFunctionBar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsShowFunctionBar]);
  return (
    <header className="w-full py-2 flex items-center justify-between">
        <h4 className="font-bold text-lg">Đau để trưởng thành</h4>
        <div className="flex gap-3 items-center text-[#9a9a9a]">
          <div
            onClick={() => setIsShowFunctionBar(!isShowFunctionBar)}
            className="relative"
            ref={wrapperRef}
          >
            {" "}
            <button className=" py-3 relative h-full group/popup hover:text-white">
              {" "}
              {/* <PopupText
                content={`Các tuỳ chọn khác cho ${"Đau để trưởng thành"}`}
              /> */}
              <PiDotsThreeBold size={25} />
            </button>
            <div
              className={`absolute top-14  w-max  right-0 ${
                isShowFunctionBar ? "block" : "hidden"
              }`}
            >
              <FunctionBarTrackPage />
            </div>
          </div>
          <button className=" hover:bg-[#666] w-6 h-6 hover:text-white flex justify-center items-center rounded-full">
            <IoMdClose size={20} />
          </button>
        </div>
      </header>
  );
}

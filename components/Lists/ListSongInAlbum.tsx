"use client";
import { CiHeart } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import PopupText from "../PopupText";
import { PiDotsThreeBold } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export interface IListSongInAlbumProps {}

export default function ListSongInAlbum(props: IListSongInAlbumProps) {
  const [showPlay, setShowPlay] = useState(false);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPlay(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setShowPlay]);
  return (
    <div className="text-[#999]">
      <nav className="flex border-b-[1px] border-[#333]   justify-between px-4 text-xs py-2 items-center font-bold">
        <span className="flex  gap-3  items-center ">
          <span className="text-xl text-center w-8"> #</span>
          <p>Tiêu đề</p>
        </span>
        <span className="px-10 relative group/popup">
          <GoClock size={20} />
          <PopupText content="Thời lượng" />
        </span>
      </nav>
      <ul className="text-sm py-3">
        <li
          ref={wrapperRef}
          onClick={() => setShowPlay(true)}
          className={`flex px-4 group hover:bg-[#2b2b28] py-2 rounded-md  ${
            showPlay && "bg-[#5b5b59] hover:bg-[#5b5b59]"
          } items-center font-bold justify-between`}
        >
          <div className="flex  items-center gap-3">
            <div className="relative w-8 group/popup">
              <button
                className={`w-8 h-full flex items-center justify-center ${
                  showPlay ? "block" : " group-hover:block  hidden"
                }`}
              >
                <FaPlay className="m-auto" size={17} />
              </button>
              <p
                className={`w-8 h-full  text-center font-serif text-2xl font-light ${
                  showPlay ? "hidden" : "block group-hover:hidden"
                }`}
              >
                1
              </p>
              <PopupText content="Phát Đừng làm trái tim anh đau của Sơn Tùng M-TP" />
            </div>
            <span className="flex flex-col">
              <p className="text-white hover:underline">
                <Link href="">Please Dont't Change(Remix)</Link>
              </p>
              <ul className="flex">
                <li className="hover:underline hover:text-white">
                  <Link href={""}>Jung kook</Link>
                </li>
              </ul>
            </span>
          </div>
          <ul className="flex gap-5 justify-end justify-self-end items-center">
            <li
              className={`mr-5 relative group/popup cursor-pointer hover:text-white ${
                showPlay ? "visible" : " group-hover:visible  invisible"
              }`}
            >
              <CiHeart size={25} />
              <PopupText content="Lưu vào thư viện" />
            </li>
            <li>4.39</li>
            <li
              className={`cursor-pointer relative ${
                showPlay ? "visible" : " group-hover:visible  invisible"
              }`}
            >
              <PiDotsThreeBold size={25} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

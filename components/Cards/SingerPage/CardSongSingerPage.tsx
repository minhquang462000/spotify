"use client";
import PopupText from "@/components/PopupText";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";

export interface ICardSongSingerPageProps {}

export default function CardSongSingerPage(props: ICardSongSingerPageProps) {
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
    <div
      onClick={() => setShowPlay(true)}
      ref={wrapperRef}
      className={`hover:bg-[#383737] rounded-md flex gap-4 h-[65px]  group items-center  px-3 ${
        showPlay && "bg-[#5a5a5a] hover:bg-[#5a5a5a]"
      }`}
    >
      <div className="relative group/popup">
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

      <img
        className="h-12 w-12 rounded-md object-cover"
        src="https://images.kienthuc.net.vn/zoom/800/uploaded/dinhcuc/2024_06_10/sontung/vi-sao-mv-dung-lam-trai-tim-anh-dau-cua-son-tung-gay-sot-hinh-2.jpg"
        alt=""
      />
      <div className="grid w-full grid-cols-3">
        <Link href="">
          <p className="hover:underline  text-lg">Đừng làm trái tim anh đau</p>
        </Link>
        <p className="justify-self-end">15.502.403</p>
        <ul className="flex w-[150px]  gap-6 justify-center justify-self-end items-center">
        <li
          className={` relative group/popup cursor-pointer hover:text-white ${
            showPlay ? "visible" : " group-hover:visible  invisible"
          }`}
        >
          <CiHeart className="" size={25} />
          <PopupText content="Lưu vào thư viện" />
        </li>
        <li className="flex gap-4">
          <span>4.39</span>
          <span
            className={`cursor-pointer relative ${
              showPlay ? "visible" : " group-hover:visible  invisible"
            }`}
          >
            <PiDotsThreeBold size={25} />
          </span>
        </li>
      </ul>
      </div>
    </div>
  );
}

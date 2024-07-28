"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import PopupText from "../PopupText";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { PiDotsThreeBold } from "react-icons/pi";

export interface ICardListSongOnPageProps {
  showAlbum?: boolean;
  showView?: boolean;
  trackPage?: boolean;
}

export default function CardListSongOnPage(props: ICardListSongOnPageProps) {
  const { showAlbum, trackPage, showView } = props;
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
      ref={wrapperRef}
      onClick={() => setShowPlay(true)}
      className={`flex px-3 group hover:bg-[#2b2b28] py-2 rounded-md  w-full ${
        showPlay && "bg-[#5b5b59] hover:bg-[#5b5b59] hover:bg-opacity-50"
      } items-center font-bold justify-between`}
    >
      <div className="flex w-[40%]  items-center gap-3">
        <div className={`relative w-8 group/popup ${trackPage && "hidden"}`}>
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
          className="w-[45px] h-[45px] object-cover rounded-md"
          src="https://i.scdn.co/image/ab6761610000f178c7c8ae4ffa1d7f3bfd4aadfa"
          alt=""
        />
        <span className="flex w-full flex-col">
          <p className="text-white w-3/4 overflow-hidden truncate hover:underline">
            <Link href="">Please Dont't Change(Remix) </Link>
          </p>
          <ul className="flex overflow-hidden w-3/4  truncate">
            <li className="hover:underline after:content-[','] hover:text-white">
              <Link href={""}>Jung kook</Link>
            </li>
          </ul>
        </span>
      </div>
      <div className={`w-[45%] flex text-start items-center text-sm`}>
        <p
          className={`hover:underline w-full overflow-hidden  ${
            !showAlbum && "hidden"
          } truncate`}
        >
          <Link href={""}>ANh TRAI SAY HAI ,Tập 5 </Link>
        </p>
        <span className={`text-[#a7a7a7] text-center w-full ${!showView && "hidden"}`} >4.385.494</span>
      </div>
      <ul className="flex w-[100px]  gap-4 justify-center justify-self-end items-center">
        <li
          className={` relative group/popup cursor-pointer hover:text-white ${
            showPlay ? "visible" : " group-hover:visible  invisible"
          }`}
        >
          <CiHeart className="" size={25} />
          <PopupText content="Lưu vào thư viện" />
        </li>
        <li className="flex gap-2">
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
  );
}

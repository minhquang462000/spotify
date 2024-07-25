"use client";
import { CiHeart } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import PopupText from "../PopupText";
import { PiDotsThreeBold } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import CardListSongOnPage from "../Cards/CardListSongOnPage";

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
    <div className="text-[#b3b3b3]">
      <ul className="flex border-b-[1px] border-[#ffffff1a] w-full pb-1   justify-between px-4 text-xs pt-2 items-center font-bold">
        <li className="flex items-center gap-3">
          <span className="text-xl text-center w-8"> #</span>
          <span>Tiêu đề</span>
        </li>
        <li className="w-[100px]  flex justify-center relative  group/popup">
          <GoClock size={18} />
        </li>
      </ul>
      <div className="text-sm py-3">
        <CardListSongOnPage  showAlbum={false} />
      </div>
    </div>
  );
}

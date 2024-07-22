"use client";
import HeaderChild from "../RenderPageChild/HeaderChid";
import Link from "next/link";
import PopupText from "../PopupText";
import CardPlayingPage from "../Cards/AlbumPage/CardPlayingPage";
import ListSongInAlbum from "../Lists/ListSongInAlbum";
import ListProductHome from "../Lists/HomePage/ListProductHome";
import FooterChild from "../RenderPageChild/FooterChild";
import { useEffect, useRef, useState } from "react";
import iconSpotify from "@/public/images/icon.jpg";
import ListSongInPlaylist from "../Lists/ListSongInAlbum";

export interface IPagePlayListProps {}

export default function PagePlayList(props: IPagePlayListProps) {
  const [isVisible, setIsVisible] = useState(0);
  const scrollRef = useRef<any>(null);
  const toggleVisibility = () => {
    if (scrollRef.current.scrollTop > 300) {
      setIsVisible(20);
    } else if (scrollRef.current.scrollTop > 50) {
      setIsVisible(10);
    } else {
      setIsVisible(0);
    }
  };
  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", toggleVisibility);

    return () => {
      scrollElement.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      ref={scrollRef}
      className="w-full h-full absolute top-0 right-0 body-childHome overflow-y-scroll z-20"
    >
      <HeaderChild isVisible={isVisible} hidden={true} />
      <div className="px-5 py-10 bg-gradient-to-t pb-4 from-[#ff9e7512] shadow to-[#FF9F75] flex gap-5 w-full">
        <div className="max-w-[180px] shadow-[#4d3024] shadow-lg aspect-square rounded-2xl overflow-hidden">
          <img
            className="w-full aspect-square  object-cover"
            src="https://seeded-session-images.scdn.co/v2/img/540/r/artist/5dfZ5uSmzR7VQK0udbAVpf/vi"
            alt=""
          />
        </div>
        <div className="flex flex-col  w-full h-full  justify-center gap-2 font-medium">
          <p className="text-sm  font-bold">PlayList</p>
          <h2 className="text-[65px] leading-[70px] font-extrabold">Sơn Tùng M-TP Radio</h2>
          <p className="text-[#ffffffb3] text-lg font-bold">
            Với MONO, Đen, HIEUTHUHAI và nhiều hơn nữa
          </p>
          <div className="flex gap-2 text-lg  font-bold items-center">
            <img
              className="w-7 rounded-full object-cover h-7"
              src={iconSpotify.src}
              alt=""
            />
            <p className="hover:underline  font-extrabold">
              {" "}
              <Link href={""}>Spotify</Link>
            </p>
            <span className="before:content-['•'] group/popup before:mr-1 relative after:ml-1 after:content-['•']">
              11.399 lượt lưu
            </span>
            <span>11 bài hát,</span>
            <span className="text-[#ffffffb3]">khoảng 31 phút 46 giây</span>
          </div>
        </div>
      </div>
      <div className="w-full px-5 max-w-[1900px]">
        <CardPlayingPage isVisible={isVisible} />
        <ListSongInPlaylist/>
      </div>
      <ListProductHome
        titleList="Album khác của Jung Kook"
        urlLink=""
        showMore="Xem danh sách đĩa nhạc"
      />
      <FooterChild />
    </div>
  );
}

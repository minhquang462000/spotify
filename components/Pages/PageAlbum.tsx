"use client";
import HeaderChild from "../RenderPageChild/HeaderChid";
import Link from "next/link";
import PopupText from "../PopupText";
import CardPlayingPage from "../Cards/AlbumPage/CardPlayingPage";
import ListSongInAlbum from "../Lists/ListSongInAlbum";
import ListProductHome from "../Lists/HomePage/ListProductHome";
import FooterChild from "../RenderPageChild/FooterChild";
import { useEffect, useRef, useState } from "react";

export interface IPageAlbumProps {}

export default function PageAlbum(props: IPageAlbumProps) {
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
      <HeaderChild isVisible={isVisible} />
      <div className="px-5 py-10 bg-gradient-to-t pb-1 from-[#031e12] to-[#003820] flex gap-5 w-full">
        <img
          className="w-[200px] h-[200px] py-2 object-cover"
          src="https://i.scdn.co/image/ab67616d00001e02741fd4807f442af3f7359316"
          alt=""
        />
        <div className="flex flex-col  w-full h-full  justify-center font-medium">
          <p className="text-sm  font-bold">Album</p>
          <h2 className="text-[100px] font-sans leading-[130px] font-extrabold">
            GOLDEN
          </h2>
          <div className="flex gap-2 text-xs font-semibold items-center">
            <img
              className="w-8 rounded-full object-cover h-8"
              src="https://tse1.mm.bing.net/th?id=OIP.fwyxN71M-8HiEuFGPUSUPQHaHa&pid=Api&P=0&h=220"
              alt=""
            />
            <p className="hover:underline">
              {" "}
              <Link href={""}>Jung Kook</Link>
            </p>
            <span className="before:content-['•'] group/popup before:mr-1 relative after:ml-1 after:content-['•']">
              2023
              <PopupText content="3 tháng 11,2023" />
            </span>
            <span>11 bài hát, 31 phút 46 giây</span>
          </div>
        </div>
      </div>
      <div className="w-full px-5 max-w-[1900px]">
        <CardPlayingPage isVisible={isVisible} />
        <ListSongInAlbum />
        <ul className="font-bold my-8 text-[10px]">
          <li className="text-xs">3 tháng 11, 2023</li>
          <li>© 2023 BIGHIT MUSIC</li>
          <li>℗ 2023 BIGHIT MUSIC</li>
        </ul>
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

"use client";

import { useEffect, useRef, useState } from "react";
import HeaderTrack from "../RenderPageChild/HeaderTrack";

export interface ITrackPageProps {}
import Link from "next/link";
import CardPlayingTrackPage from "../Cards/CardPlayingTrackPage";
import CardListSongOnPage from "../Cards/CardListSongOnPage";
import CardSongSingerPage from "../Cards/SingerPage/CardSongSingerPage";
import FooterChild from "../RenderPageChild/FooterChild";
export default function TrackPage(props: ITrackPageProps) {
  const [isVisible, setIsVisible] = useState(0);
  const [showMore, setShowMore] = useState(false);
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
    <section className="w-full h-full bg-[#121212] rounded-md overflow-hidden  relative   ">
      <div className="absolute w-full top-0 z-10 bg-gradient-to-b from-[#727a72] to-transparent h-[600px]" />
      <div
        ref={scrollRef}
        className="w-full h-full absolute   top-0 right-0 body-childHome overflow-y-scroll z-20"
      >
        <HeaderTrack visible={isVisible} />
        <div className="px-5 pt-[120px] bg-gradient-to-t pb-4 from-[#41414169] shadow to-[#727a72] items-end flex gap-5 w-full">
          <div className="max-w-[180px] shadow-[#4d3024] shadow-lg aspect-square rounded-2xl overflow-hidden">
            <img
              className="w-full aspect-square  object-cover"
              src="https://i.scdn.co/image/ab67616d00001e02e88e2e6c94ec9e1c0ab4d122"
              alt=""
            />
          </div>
          <div className="flex flex-col  w-full h-full    font-medium">
            <p className="text-sm  font-bold">Bài hát</p>
            <h2 className="text-[55px] leading-[75px]  font-extrabold">
              Đau để trưởng thành
            </h2>
            <div className="flex gap-2 text-sm  font-bold items-center">
              <Link href={""}>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-7 rounded-full object-cover h-7"
                    src={
                      "https://i.scdn.co/image/ab6761610000f178c7c8ae4ffa1d7f3bfd4aadfa"
                    }
                    alt=""
                  />
                  <p className="hover:underline  font-extrabold"> Only C</p>
                </div>
              </Link>
              <span>•</span>
              <span className="  hover:underline  relative  ">
                <Link href={""}> Đau để trưởng thành</Link>
              </span>
              <span className="after:content-['•'] after:ml-1 before:content-['•'] before:mr-1">
                2019
              </span>
              <span className="after:content-['•'] after:ml-1">4.43</span>
              <span className="">6.778.608</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 max-w-[1900px]">
          <div className="w-full">
            <CardPlayingTrackPage visible={isVisible} />
            <div className="px-3">
              <Link href={""}>
                <div className="p-3  rounded-md flex hover:bg-[#313231] items-center gap-4">
                  <img
                    className="w-[70px] h-[70px] object-cover rounded-full"
                    src="https://i.scdn.co/image/ab6761610000f178c7c8ae4ffa1d7f3bfd4aadfa"
                    alt=""
                  />
                  <nav className="font-bold ">
                    <p className="text-sm mb-1"> Nghệ sĩ</p>
                    <p className="hover:underline">Only C</p>
                  </nav>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-5">
            <p className="text-2xl font-bold mb-1">Đề xuất</p>
            <p className="text-sm font-bold text-[#a7a7a7]">
              {" "}
              Dựa trên bài hát này
            </p>
            <div className="mt-5">
              <CardListSongOnPage trackPage={true} showView={true} />
            </div>
          </div>
          <div className="px-5">
            <p className="text-sm font-bold mb-1 text-[#a7a7a7]">
              {" "}
              Các bài hát thịnh hành của
            </p>
            <p className="text-2xl font-bold ">Only C</p>
            <div className="mt-5">
              <CardListSongOnPage trackPage={true} showView={true} />
            </div>
            <button
              className="text-sm ml-2 font-bold text-[#a7a7a7] mt-5"
              onClick={() => setShowMore(!showMore)}
            >
              {!showMore ? "Xem thêm" : "Ẩn bớt"}
            </button>
          </div>
        </div>
        <FooterChild />
      </div>
    </section>
  );
}

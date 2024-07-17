"use client";
import { useEffect, useRef, useState } from "react";
import CardSingerDetail from "./CardSingerDetail";

export interface ICardInfoSingerProps {}

export default function CardInfoSinger(props: ICardInfoSingerProps) {
  const [openDetailSinger, setOpenDetailSinger] = useState(false);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDetailSinger(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setOpenDetailSinger]);
  return (
    <div className="p-3">
      <h4 className="font-bold py-2">Giới thiệu</h4>
      <div
        onClick={() => setOpenDetailSinger(true)}
        className="max-w-[850px] relative w-full h-[500px] bg-center  hover:scale-[1.01] rounded-md overflow-hidden"
      >
        <img
          className="w-full h-full absolute top-0 left-0 object-cover "
          src="https://nld.mediacdn.vn/2019/6/28/poster-official-15616831262551390324483-crop-15616834519251919446428.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[#121212] opacity-40" />
        <nav className="absolute font-semibold bottom-0 left-0 p-10">
          <p>
            {" "}
            <span className=" text-lg">1.974.830 </span> người nghe hàng tháng
          </p>
          <p className="line-clamp-3 w-4/5 leading-6">
            Nguyễn Thanh Tùng, born in 1994, known professionally as Sơn Tùng
            M-TP, is a Vietnamese singer, songwriter, producer, and actor. He is
            not only known as one of the most successful Vietnamese artists and
            as the "Prince of V-pop", but also as the Chairman of three
            self-created companies: M-TP Entertainment, M-TP Talent and M-TP &
            Friends. He has received many achievements: a MTV Europe Music
            Award, an Mnet Asian Music Award, appeared on Forbes Vietnam's 2018
            30 Under 30 list, and is also the first Vietnamese musician to enter
            the Billboard Social 50. Up until now, he has already released a
            total of 25 songs, such as "Cơn mưa ngang qua", "Em của ngày hôm
            qua", " Âm thầm bên em", and many more. His single "Chạy ngay đi"
            was released with a music video featuring Thai actress Davika
            Hoorne, and with a collaboration with rapper Snoop Dogg, he went on
            and created the big hit "Hãy trao cho anh". After releasing "Có chắc
            yêu là đây" in 2020, the song became the 3rd-most-streamed Youtube
            premiere at the time with 902,000 live viewers. As we all know,
            music is, without a doubt, the easiest way to connect people. For
            Sơn Tùng M-TP, music is everything he ever wanted to offer to the
            world around him with all his heart and soul.
          </p>
        </nav>
      </div>
      <div
        className={`bg-black bg-opacity-70 h-full w-full fixed left-0 z-[888] top-0 ${
          openDetailSinger ? "block" : "hidden"
        }`}
      ></div>
      <div
        ref={wrapperRef}
        className={`${openDetailSinger ? "block" : "hidden"}`}
      >
        <CardSingerDetail setOpenDetail={setOpenDetailSinger} />
      </div>
    </div>
  );
}

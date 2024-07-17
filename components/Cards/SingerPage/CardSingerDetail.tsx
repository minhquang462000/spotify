import Link from "next/link";
import * as React from "react";
import { FaFacebook, FaInstagram, FaRegUser, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PiArrowSquareOutBold } from "react-icons/pi";

export interface ICardSingerDetailProps {
  setOpenDetail: (value: boolean) => void;
}

export default function CardSingerDetail(props: ICardSingerDetailProps) {
  const { setOpenDetail } = props;
  return (
    <section
      style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
      className="w-1/2 fixed z-[998] rounded-lg  overflow-hidden "
    >
      <div className="w-full h-full  max-h-[70vh] body-childHome overflow-y-scroll  relative">
        <button
          onClick={() => setOpenDetail(false)}
          className="absolute right-4 top-4 w-7 h-7 ri text-gray-400 hover:text-white flex justify-center items-center rounded-full hover:bg-[#333] bg-opacity-30 "
        >
          <IoMdClose size={22} />
        </button>
        <div className="w-full h-[400px]  overflow-hidden bg-[#000000]">
          <img
            className="w-[85%] h-full object-cover object-center m-auto "
            src="https://nld.mediacdn.vn/2019/6/28/poster-official-15616831262551390324483-crop-15616834519251919446428.jpg"
            alt=""
          />
        
        </div>
        <div className="grid text-[#999] text-sm font-semibold bg-[#121212] px-8 py-6 grid-cols-3">
          <div>
            <ul className=" flex flex-col gap-6 ">
              <li className="mb-3">
                <p className="text-3xl text-white font-bold">5.466.062</p>
                <p>Người theo dõi</p>
              </li>
              <li className="mb-3">
                <p className="text-3xl text-white font-bold">1.974.830</p>
                <p>Người nghe Hàng tháng</p>
              </li>
              <li className="">
                <p className=" text-white font-bold">Ho Chi Minh City, VN</p>
                <p>792.772 người nghe</p>
              </li>
              <li className="">
                <p className=" text-white font-bold">Hanoi, VN</p>
                <p>792.772 người nghe</p>
              </li>
              <li className="">
                <p className=" text-white font-bold">Da Nang, VN</p>
                <p>792.772 người nghe</p>
              </li>
              <li className="">
                <p className=" text-white font-bold">Bien Hoa, VN</p>
                <p>792.772 người nghe</p>
              </li>
              <li className="">
                <p className=" text-white font-bold">Haiphong, VN</p>
                <p>792.772 người nghe</p>
              </li>
            </ul>
            <ul className="mt-14 flex flex-col gap-4 font-bold">
              <li>
                <Link href="">
                  <span className="flex gap-2 hover:underline items-center">
                    <FaFacebook size={22} />
                    Facebook
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link href="">
                  <span className="flex gap-2 hover:underline items-center">
                    <FaInstagram size={22} />
                    Instagram
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link href="">
                  <span className="flex gap-2 hover:underline items-center">
                    <FaTwitter size={22} />
                    Twitter
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link href="">
                  <span className="flex gap-2 hover:underline items-center">
                    <PiArrowSquareOutBold size={22} />
                    Wikipedia
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <nav className="col-span-2 ">
            <p>
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
            <div className="flex gap-2 mt-8 items-center">
              <span className="w-8 h-8  bg-[#3a3a3a] flex justify-center items-center rounded-full ">
                {" "}
                <FaRegUser size={15} color="white" />
              </span>
              Đăng bới Sơn Tùng M-TP
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

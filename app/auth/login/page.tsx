"use client";
import Image from "next/image";
import { FaRegEye, FaRegEyeSlash, FaSpotify } from "react-icons/fa";
import googleIcon from "@/public/icons/new-google-icon.svg";
import faceBookIcon from "@/public/icons/new-facebook-icon.svg";
import appleIcon from "@/public/icons/new-apple-icon.svg";
import { useState } from "react";
import Link from "next/link";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  return (
    <main className="bg-gradient-to-t from-black text-sm  to-[#2a2a2a]  w-full h-max rounded-md  overflow-hidden   relative">
      <div className="max-w-[750px] rounded-md flex flex-col justify-center items-center text-white py-5 mt-[40px] bg-[#121212] m-auto w-2/3 ">
        <FaSpotify size={40} />
        <h2 className="font-bold text-3xl my-8">Đang nhập vào Spotify</h2>
        <div className="w-3/4 m-auto border-[#2a2a2a] border-b">
          <div className="flex flex-col  w-3/5 m-auto font-bold pb-10 text-center  items-center justify-center gap-3">
            <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-8 items-center">
              {" "}
              <Image src={googleIcon} alt="" /> Tiếp tục bằng Google
            </button>
            <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-8 items-center">
              {" "}
              <Image src={faceBookIcon} alt="" /> Tiếp tục bằng Google
            </button>
            <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-8 items-center">
              {" "}
              <Image src={appleIcon} alt="" /> Tiếp tục bằng Google
            </button>
            <button className=" rounded-full hover:border-white  text-center border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 i">
              {" "}
              Tiếp tục bằng số điện thoại
            </button>
          </div>
          <div className="w-full border-[#2a2a2a] border-b h-[1px]" />
          <div className="flex flex-col w-3/5 m-auto font-bold py-8  text-start   gap-5">
            <div className="">
              <label className="text-xs" htmlFor="email">
                Email hoặc tên người dùng
              </label>
              <input
                placeholder="Email hoặc tên người dùng"
                className="w-full border p-3 rounded-md mt-2 hover:border-white  border-[#787878] outline-none focus:ring focus:ring-white bg-transparent text-white"
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="">
              <label className="text-xs" htmlFor="email">
                Mật khẩu
              </label>
              <div className="w-full relative">
                <input
                  placeholder="Mật khẩu"
                  className="w-full border p-3 rounded-md mt-2 hover:border-white  border-[#787878] outline-none focus:ring focus:ring-white bg-transparent text-white"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#a7a7a7] absolute hover:text-white right-5 z-[99] top-[17px] text-3xl"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="flex mt-3  gap-5 items-center">
              <button
                onClick={() => setRememberMe(!rememberMe)}
                className={`relative rounded-full w-[40px] justify-self-start focus:ring-1   ring-offset-2 ${
                  rememberMe ? "bg-[#1ed760]" : "bg-[#a7a7a7] "
                } h-5`}
              >
                <span
                  className={`h-[17px] w-[17px] transition-all duration-300  absolute top-[50%] translate-y-[-50%] ${
                    !rememberMe ? "right-[19px]" : "right-[2px]"
                  }  bg-[#000] rounded-full`}
                />
              </button>
              <p className="text-xs">Hãy nhớ tôi</p>
            </div>
            <button className="text-black rounded-full hover:scale-105 transition-all duration-300 font-extrabold bg-[#1ed760] px-8 py-3 my-3">
              Đăng nhập
            </button>
            <p className="text-center underline font-medium hover:text-[#1ed760]">
              <Link href="/auth/forgot-pass">Quên mật khẩu cảu bạn</Link>
            </p>
          </div>
        </div>
        <span className="h-[150px] flex justify-center items-center gap-3">
          Bạn chưa có tài khoản?{" "}
          <p className="underline font-medium text-base hover:text-[#1ed760]">
            {" "}
            <Link href={"/auth/register"}>Đăng ký Spotify</Link>
          </p>
        </span>
      </div>

      <footer className="bg-[#121212] fixed bottom-0 left-0 mt-[40px] font-medium text-xs  w-full text-center py-8 text-[#a7a7a7]">
        Trang web này được bảo vệ bằng reCAPTCHA và tuân theo{" "}
        <span className="underline">Chính sách quyền riêng tư</span> cũng như{" "}
        <span className="underline">Điều khoản dịch vụ </span>của Google.
      </footer>
    </main>
  );
}

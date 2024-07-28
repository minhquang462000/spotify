import Link from "next/link";
import googleIcon from "@/public/icons/new-google-icon.svg";
import faceBookIcon from "@/public/icons/new-facebook-icon.svg";
import appleIcon from "@/public/icons/new-apple-icon.svg";
import { FaSpotify } from "react-icons/fa";
import Image from "next/image";
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="bg-[#121212] w-full  text-lg  relative">
      <div className="max-w-[450px] rounded-md h-screen flex flex-col gap-10 pt-10 items-center text-white py-5 text-center   m-auto  ">
        <FaSpotify size={50} />
        <h2 className="font-bold text-[60px] w-[500px]  leading-[90px] ">
          Đăng ký để bắt đầu nghe
        </h2>
        <div className="flex flex-col w-full  font-bold   text-start   gap-3">
          <label className="fonr-bold" htmlFor="email">
            Địa chỉ Email
          </label>
          <input
            placeholder="Email hoặc tên người dùng"
            className="w-full border p-3 rounded-md mt-2 hover:border-white  border-[#787878] outline-none focus:ring focus:ring-white bg-transparent text-white"
            type="text"
            name="email"
            id="email"
          />
          <p className=" underline text-start  font-medium text-[#1ed760]">
            <Link href="/auth/forgot-pass">Dùng số điện thoại</Link>
          </p>
          <button className="text-black w-full rounded-full hover:scale-105 transition-all duration-300 font-extrabold bg-[#1ed760] px-8 py-3 my-3">
            Tiếp theo
          </button>
        </div>
        <div className=" border-[#666] w-full border-b my-5 relative h-[1px]">
          <span className="bg-[#121212] absolute -top-3  left-1/2 translate-x-[-50%] z-10  px-5 h-max w-max text-center">
            hoặc
          </span>
        </div>
        <div className="flex flex-col border-[#2a2a2a]  border-b  w-full  font-bold pb-10 text-center  items-center justify-center gap-3">
          <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-[80px] items-center">
            {" "}
            <Image width={32} src={googleIcon} alt="" /> Đăng ký bằng Google
          </button>
          <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-[80px] items-center">
            {" "}
            <Image width={32} src={faceBookIcon} alt="" /> Đăng ký bằng Google
          </button>
          <button className="flex rounded-full hover:border-white  border w-full focus:ring focus:ring-white border-[#787878] px-8 py-3 gap-[80px] items-center">
            {" "}
            <Image width={32} src={appleIcon} alt="" /> Đăng ký bằng Google
          </button>
        </div>
        <span className="mb-[100px] text-[#b3b3b3] flex justify-center items-center gap-3">
          Bạn đã có tài khoản?{" "}
          <p className="underline text-white font-medium ">
            {" "}
            <Link href={"/auth/login"}>Đăng nhập tại đây</Link>
          </p>
        </span>
      </div>
      <footer className="fixed bottom-0 text-[#b3b3b3] py-8 font-medium text-sm w-full flex flex-col justify-center items-center left-0 right-0">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <span className="flex gap-1">
          <p className="underline">
            <Link href="/">Privacy Policy</Link>
          </p>{" "}
          and{" "}
          <p className="underline">
            <Link href={"/"}>Terms of Service</Link>
          </p>{" "}
          apply.
        </span>
      </footer>
    </main>
  );
}

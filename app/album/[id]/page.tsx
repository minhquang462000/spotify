import CardPlayingPage from "@/components/Cards/AlbumPage/CardPlayingPage";
import ListProductHome from "@/components/Lists/HomePage/ListProductHome";
import ListSongInAlbum from "@/components/Lists/ListSongInAlbum";
import PopupText from "@/components/PopupText";
import FooterChild from "@/components/RenderPageChild/FooterChild";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#121212] w-full  h-full rounded-md overflow-y-scroll  body-childHome  relative">
      <div className="absolute w-full top-0 z-10 bg-gradient-to-b from-[#003820] to-transparent h-[500px]" />
      <div className="w-full h-full absolute z-20">
        <HeaderChild isVisible={0} hidden={true} />
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
          <CardPlayingPage />
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
    </main>
  );
}

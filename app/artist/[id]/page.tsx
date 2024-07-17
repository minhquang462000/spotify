import CardInfoSinger from "@/components/Cards/SingerPage/CardInfoSinger";
import CardSingerPage from "@/components/Cards/SingerPage/CardSingerPage";
import ListSongArtistPage from "@/components/Lists/ListSongArtistPage";
import PageArtist from "@/components/Pages/PageArtist";
import FooterChild from "@/components/RenderPageChild/FooterChild";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="w-full h-full bg-[#121212]  relative   ">
      <div
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.XpFfccgiAhbDrhmDoUdLEAHaD5&pid=Api&P=0&h=220')",
          backgroundAttachment: "scroll",
          backgroundPositionX: "50%",
          backgroundPositionY: "15%",
        }}
        className=" bg-no-repeat absolute w-full min-h-[450px] max-h-[40vh] z-10 left-0 top-0   rounded-md  bg-cover   bg-center    overflow-hidden"
      ></div>
      <PageArtist />
    </main>
  );
}
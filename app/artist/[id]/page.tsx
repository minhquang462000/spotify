import CardSingerPage from "@/components/Cards/SingerPage/CardSingerPage";
import ListSongArtistPage from "@/components/Lists/ListSongArtistPage";
import FooterChild from "@/components/RenderPageChild/FooterChild";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="w-full h-full  relative   ">
      <div
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.XpFfccgiAhbDrhmDoUdLEAHaD5&pid=Api&P=0&h=220')",
          backgroundAttachment: "scroll",
          backgroundPositionX: "50%",
          backgroundPositionY: "15%",
        }}
        className=" bg-no-repeat absolute w-full min-h-[450px] max-h-[40vh] -z-10 left-0 top-0  rounded-md  bg-cover   bg-center    overflow-hidden"
      ></div>
      <div className=" absolute overflow-y-scroll  top-0 right-0 body-childHome w-full h-full">
        <HeaderChild />
        <CardSingerPage />
        <ListSongArtistPage />
        <FooterChild />
      </div>
    </main>
  );
}

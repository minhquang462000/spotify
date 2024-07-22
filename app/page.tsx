import ListProductHome from "@/components/Lists/HomePage/ListProductHome";
import ListRatingHome from "@/components/Lists/HomePage/ListRatingHome";
import ListSingerHome from "@/components/Lists/ListSingerHome";
import FooterChild from "@/components/RenderPageChild/FooterChild";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";
const arrRender = [{ urlImag: "", titleCard: "", urlLink: "", info: "" }];
export default function Home() {
  return (
    <main className="w-full  h-full overflow-y-scroll  body-childHome overflow-hidden bg-[#121212]  relative box-border rounded-md ">
      <HeaderChild isVisible={0} hidden={true} />
      <div className="flex  flex-col gap-4">
        <div className="bg-gradient-to-t py-2 from-transparent to-[#1f1f1f]">
          <ListSingerHome
            titleList="Nghệ sĩ phổ biến"
            urlLink=""
            showMore="Hiện tất cả"
          />
        </div>
        <div className="px-2 flex flex-col  gap-5">
          <ListProductHome
            titleList="Album phổ biến"
            urlLink=""
            showMore="Hiện tất cả"
          />
          <ListProductHome
            titleList="Radio phổ biến"
            urlLink=""
            showMore="Hiện tất cả"
          />
          <ListRatingHome />
          <ListProductHome
            titleList="Danh sách phát trên Spotify"
            urlLink=""
            showMore=""
          />
        </div>
      </div>
      <FooterChild />
    </main>
  );
}

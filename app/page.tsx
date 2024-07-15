
import ListAlbumHome from "@/components/Lists/ListAlbumHome";
import ListRadioHome from "@/components/Lists/ListRadioHome";
import ListRatingHome from "@/components/Lists/ListRatingHome";
import ListSingerHome from "@/components/Lists/ListSingerHome";
import PlaylistOnPage from "@/components/Lists/PlayListOnPage";
import FooterChild from "@/components/RenderPageChild/FooterChild";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";
import { MainLayout } from "@/layouts";

export default function Home() {
  return (
    <main className="w-full  h-full overflow-y-scroll  body-childHome overflow-hidden bg-[#121212]  relative box-border rounded-md ">
      <HeaderChild />
      <div className="flex  flex-col gap-4">
        <div className="bg-gradient-to-t py-2 from-transparent to-[#1f1f1f]">
          <ListSingerHome />
        </div>
        <ListAlbumHome />
        <ListRadioHome />
        <ListRatingHome />
        <PlaylistOnPage />
      </div>
      <FooterChild />
    </main>
  );
}
